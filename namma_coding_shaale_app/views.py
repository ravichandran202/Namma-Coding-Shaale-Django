from django.http import Http404, JsonResponse, HttpResponse, HttpResponseNotFound
from django.urls import reverse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from google.oauth2.credentials import Credentials 
from googleapiclient.discovery import build  
import os

import requests.auth

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login, update_session_auth_hash
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.utils import timezone
from http import HTTPMethod

import random
import string
import secrets
from .models import OTP, CourseContent, UserContentProgress, UserCourse, ProblemSubmission, Content, Course, Problem, QuizSubmission, Order, Batch, Blog
import logging
import json
import ast
from datetime import datetime, timedelta, time
from django.utils import timezone
import requests

from django.db import transaction
import django.db.models as models
from django.db.models import Case, When, Value, BooleanField, Count, Q
from django.db.models.functions import Concat
from django.db.models import F
from django.core.paginator import Paginator

credentials = getattr(settings, 'CREDENTIALS', {})
CLIENT_ID = os.environ.get('GOOGLE_OAUTH_CLIENT_ID')
CLIENT_SECRET = os.environ.get('GOOGLE_OAUTH_CLIENT_SECRET')
REDIRECT_URI = os.environ.get('GOOGLE_OAUTH_REDIRECT_URI')
# Get an instance of a logger
from namma_coding_shaale.otel.otel_utils import trace_span
logger = logging.getLogger(__name__)

memorycache_sidebar = {}

def generate_otp():
    return ''.join(random.choices(string.digits, k=6))

def send_otp_email(user, otp_code):
    logger.info(f"Attempting to send OTP email to user: {user.username}")
    subject = 'Your OTP for Namma Coding Shaale'
    context = {
        'name': user.username,
        'otp': otp_code
    }
    html_message = render_to_string('otp_email.html', context=context)
    message = strip_tags(html_message)
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [user.email]
    
    try:
        send_mail(subject, message, email_from, recipient_list, html_message=html_message)
        logger.info(f"OTP email sent successfully to {user.email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send OTP email to {user.email}: {str(e)}", exc_info=True)
        print(f"Failed to send OTP email: {str(e)}")
        return False

def send_course_enrollment_email(user, course, user_course, request):
    """Helper function to send course enrollment success email"""
    logger.info(f"Sending course enrollment email for user {user.username}, course {course.name}")
    subject = f"Successfully Enrolled in {course.name} | Namma Coding Shaale"
    
    context = {
        'name': user.get_full_name() or user.username,
        'course_name': course.name,
        'purchase_date': datetime.now().strftime("%B %d, %Y at %I:%M %p"),
        'order_id': f"NCS-{user_course.id}-{datetime.now().strftime('%Y%m%d')}",
        'my_courses_link': request.build_absolute_uri('/my-courses/')
    }
    
    html_message = render_to_string('course_enrollment_email.html', context)
    
    try:
        send_mail(
            subject=subject,
            message=strip_tags(html_message),
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[user.email],
            html_message=html_message,
            fail_silently=False
        )
        logger.info(f"Enrollment email sent to {user.email}")
    except Exception as e:
        logger.error(f"Failed to send enrollment email to {user.email}: {str(e)}", exc_info=True)

@trace_span
@csrf_exempt
@csrf_exempt
def auth_receiver(request):
    """
    Handles Google OAuth2 'Authorization Code' Flow
    """
    # 1. Get the Code (Google sends this via GET or POST)
    code = request.GET.get('code') or request.POST.get('code')
    
    if not code:
        return HttpResponse('No authorization code provided.', status=400)

    try:
        # 2. Exchange Code for Access Token
        token_endpoint = "https://oauth2.googleapis.com/token"
        token_data = {
            'code': code,
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'redirect_uri': REDIRECT_URI,
            'grant_type': 'authorization_code'
        }

        
        res = requests.post(token_endpoint, data=token_data)
        tokens = res.json()
        
        if 'error' in tokens:
            logger.error(f"Google Token Error: {tokens}")
            return HttpResponse(f"Google Error: {tokens.get('error_description')}", status=400)

        access_token = tokens.get('access_token')
        id_token_jwt = tokens.get('id_token')

        # 3. Verify Identity (Get Email/Name)
        id_info = id_token.verify_oauth2_token(
            id_token_jwt, 
            google_requests.Request(), 
            CLIENT_ID
        )
        
        email = id_info['email']
        first_name = id_info.get('given_name', '')
        last_name = id_info.get('family_name', '')

        # 4. ATTEMPT TO FETCH PHONE NUMBER (The "Try" Step)
        phone_number = None
        try:
            creds = Credentials(token=access_token)
            service = build('people', 'v1', credentials=creds)

            # Query the People API
            person = service.people().get(
                resourceName='people/me',
                personFields='phoneNumbers'
            ).execute()

            print("\n\nPERSON : ", person)
            
            # Check results
            connections = person.get('phoneNumbers', [])
            if connections:
                # Use 'canonicalForm' (e.g., +919876543210) or 'value'
                phone_number = connections[0].get('canonicalForm') or connections[0].get('value')
                logger.info(f"Success: Found phone number via API: {phone_number}")
            else:
                logger.info("API returned no phone numbers (User likely set to Private).")

        except Exception as api_e:
            logger.warning(f"People API failed: {api_e}")
            # Do not crash; proceed to login

        # 5. USER LOGIN / CREATION
        user, created = User.objects.get_or_create(
            email=email,
            defaults={
                'username': email,
                'first_name': first_name,
                'last_name': last_name,
            }
        )

        # 6. SAVE PHONE (If API found it)
        if phone_number:
            # Basic cleaning (remove spaces/dashes)
            clean_number = ''.join(filter(str.isdigit, phone_number))
            
            # Ensure profile exists
            if not hasattr(user, 'profile'):
                from .models import Profile
                Profile.objects.create(user=user)
            
            user.profile.mobile_number = clean_number
            user.profile.save()

        # Log the user in
        auth_login(request, user)

        # 7. ROUTING LOGIC (The Fallback)
        # If we STILL don't have a number, send to manual form
        if not hasattr(user, 'profile') or not user.profile.mobile_number:
            return redirect('complete_profile')
        
        logger.info(f"GOOGLE_LOGIN_SUCCESS")
        return redirect('my-courses')

    except Exception as e:
        logger.error(f"Critical Auth Error: {e}", exc_info=True)
        return HttpResponse('System Error', status=500)

@trace_span
@login_required
def complete_profile(request):
    """
    Fallback View: Validation logic handled here (No forms.py)
    """
    # Safety check: If they have a number, kick them out
    # if request.user.profile.mobile_number:
    #     return redirect('my-courses')

    error_message = None
    entered_number = ''

    if request.method == 'POST':
        # Extract data from POST
        mobile_number = request.POST.get('mobile_number', '').strip()
        birth_date = request.POST.get('birth_date')
        gender = request.POST.get('gender')
        location = request.POST.get('location')
        bio = request.POST.get('bio')
        
        college_name = request.POST.get('college_name')
        college_university = request.POST.get('college_university')
        degree = request.POST.get('degree')
        branch = request.POST.get('branch')
        year_of_study = request.POST.get('year_of_study')
        graduation_year = request.POST.get('graduation_year')
        enrollment_number = request.POST.get('enrollment_number')
        cgpa = request.POST.get('cgpa')
        
        linkedin_url = request.POST.get('linkedin_url')
        twitter_handle = request.POST.get('twitter_handle')
        website = request.POST.get('website')
        
        # Basic Validation
        if not mobile_number:
            error_message = "Mobile number is required."
        elif not mobile_number.isdigit():
            error_message = "Mobile number must contain digits only."
        elif len(mobile_number) < 10:
            error_message = "Please enter a valid 10-digit number."
        else:
            try:
                # Create or Update UserProfile
                # We import UserProfile here to avoid circular imports if any, 
                # but better to put it at top level if possible. 
                # For now, inline import to be safe with existing structure.
                from .models import UserProfile
                
                profile, created = UserProfile.objects.get_or_create(user=request.user)
                
                profile.mobile_number = mobile_number
                profile.birth_date = birth_date if birth_date else None
                profile.gender = gender
                profile.location = location
                profile.bio = bio
                
                profile.college_name = college_name
                profile.college_university = college_university
                profile.degree = degree
                profile.branch = branch
                profile.year_of_study = year_of_study if year_of_study else None
                profile.graduation_year = graduation_year if graduation_year else None
                profile.enrollment_number = enrollment_number
                profile.cgpa = cgpa if cgpa else None
                
                profile.linkedin_url = linkedin_url
                profile.twitter_handle = twitter_handle
                profile.website = website
                
                profile.save()
                
                return redirect('my-courses')
            
            except Exception as e:
                logger.error(f"Error saving profile for {request.user.username}: {e}", exc_info=True)
                error_message = "An error occurred while saving your profile. Please try again."

    return render(request, 'onboarding_form.html', {
        'error_message': error_message,
        'user': request.user
    })

@trace_span
def login(request):
    if request.method == HTTPMethod.POST:

        #handle onboarding flow
        if "first-name" and "last-name" in request.POST and request.user.is_authenticated:
            logger.info(f"Processing onboarding for user: {request.user.username}")
            first_name = request.POST.get('first-name')
            last_name = request.POST.get('last-name')
            user = request.user
            user.first_name = first_name
            user.last_name = last_name
            user.save()
            return redirect("my-courses")

        # OTP verification step
        if 'otp' in request.POST:
            email = request.session.get('otp_email')
            if not email:
                logger.warning("OTP login attempted with expired session")
                messages.error(request, 'OTP session expired. Please try again.')
                return redirect('login')
            
            otp_code = request.POST['otp']
            logger.info(f"Verifying OTP for email: {email}")
            
            try:
                user = User.objects.get(email=email)
                otp = OTP.objects.filter(user=user, code=otp_code).latest('created_at')
                
                if otp.is_valid():
                    auth_login(request, user)
                    logger.info(f"User logged in successfully via OTP: {email}")
                    # Clean up
                    OTP.objects.filter(user=user).delete()
                    if 'otp_email' in request.session:
                        del request.session['otp_email']
                    
                    
                    # Check if profile exists and has mobile number
                    try:
                        has_mobile = hasattr(request.user, 'profile') and request.user.profile.mobile_number
                    except Exception:
                        has_mobile = False

                    if request.user.first_name == "" or not has_mobile:
                        logger.info(f"Redirecting user {email} to onboarding form")
                        return render(request, "onboarding_form.html")
                    return redirect("my-courses")
                else:
                    logger.warning(f"Expired OTP submitted for {email}")
                    messages.error(request, 'OTP has expired. Please request a new one.')
                    return redirect('login')
            except (User.DoesNotExist, OTP.DoesNotExist):
                logger.warning(f"Invalid OTP attempt for {email}")
                messages.error(request, 'Invalid OTP. Please try again.')
                return render(request, "verify_otp.html", {'email': email})
        
        # Initial email submission
        email = request.POST['email'].lower()
        logger.info(f"Login initiated for email: {email}")
        
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            logger.info(f"Creating new user during login: {email}")
            # Create user if not exists
            password = "1234567890"
            user = User.objects.create_user(username=email, email=email, password=password)
            user.save()
            messages.info(request, "We've created an account for you and sent an OTP to your email")
        
        # Generate and send OTP
        otp = OTP.objects.create(user=user)  # Code and expires_at are set automatically
        
        if send_otp_email(user, otp.code):
            request.session['otp_email'] = email
            return render(request, "verify_otp.html", {'email': email})
        else:
            logger.error(f"Failed to send OTP to {email}")
            messages.error(request, 'Failed to send OTP. Please try again.')
            return redirect('login')

    return render(request, "login.html")


@trace_span
def resend_otp(request):
    if request.method == HTTPMethod.POST:
        email = request.session.get('otp_email')
        if not email:
            logger.warning("Resend OTP attempted without valid session email")
            messages.error(request, 'Session expired. Please try logging in again.')
            return redirect('login')
        
        logger.info(f"Resending OTP for email: {email}")
        try:
            user = User.objects.get(email=email)
            # Delete any existing OTPs for this user
            OTP.objects.filter(user=user).delete()
            
            # Create and send new OTP
            otp = OTP.objects.create(user=user)
            
            if send_otp_email(user, otp.code):
                messages.success(request, 'New OTP sent successfully!')
            else:
                messages.error(request, 'Failed to resend OTP. Please try again.')
            
            return render(request, "verify_otp.html", {'email': email})
        except User.DoesNotExist:
            logger.error(f"Resend OTP failed: User not found for email {email}")
            messages.error(request, 'User not found. Please try again.')
            return redirect('login')
    
    return redirect('login')

@trace_span
@login_required(login_url="login")
def logout(request):
    logger.info(f"User logged out: {request.user.username}")
    auth.logout(request)
    return redirect('login')

@trace_span
def home(request):
    logger.info("Home page called..... Namma Coding Shaale")
    return render(request,"index.html")

@trace_span
def code_editor_freemium(request):
    logger.info("Code Editor Freemium Page Accessed")
    print("Code Editor Freemium Page Called")
    return render(request,"code-editor-freemium.html")

@trace_span
@login_required(login_url="login")
def code_editor(request, course_id):
    logger.info(f"User {request.user.id} accessed code editor for course {course_id}")
    roadmap = None
    is_enrolled_user = False
    if UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
        is_enrolled_user = True
        roadmap = get_user_roadmap_html(user_id=request.user.id, course_id=course_id)
    
    context = {
        "is_freemium": not is_enrolled_user,
        "roadmap": roadmap,
        "course_id": course_id
    }
    
    return render(request, "code-editor.html", context)

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .models import UserCourse, CourseContent, ProblemSubmission

@trace_span
@login_required(login_url="login")
def profile_page(request, section=None):
    logger.info(f"User {request.user.id} accessed profile page (section: {section})")
    user = request.user
    
    # --- Profile Update Logic ---
    if request.method == "POST":
        logger.info(f"User {request.user.id} updating profile details")
        
        # 1. Update User Model
        # user.first_name = request.POST.get('firstName', user.first_name).strip().title()
        # user.last_name = request.POST.get('lastName', user.last_name).strip().title()
        # user.email = request.POST.get('email', user.email).lower().strip()
        # user.save()

        # 2. Update UserProfile Model
        from .models import UserProfile
        profile, created = UserProfile.objects.get_or_create(user=user)

        # Fields from profile-page.html
        # mobile_number, birth_date, gender, location, bio
        # college_name, college_university, degree, branch, year_of_study, graduation_year, enrollment_number, cgpa
        # linkedin_url, twitter_handle
        
        profile.mobile_number = request.POST.get('mobile_number', profile.mobile_number)
        
        dob = request.POST.get('birth_date')
        if dob: profile.birth_date = dob
        
        profile.gender = request.POST.get('gender', profile.gender)
        profile.location = request.POST.get('location', profile.location)
        profile.bio = request.POST.get('bio', profile.bio)
        
        profile.college_name = request.POST.get('college_name', profile.college_name)
        profile.college_university = request.POST.get('college_university', profile.college_university)
        profile.degree = request.POST.get('degree', profile.degree)
        profile.branch = request.POST.get('branch', profile.branch)
        
        yos = request.POST.get('year_of_study')
        if yos: profile.year_of_study = yos
        
        grad_year = request.POST.get('graduation_year')
        if grad_year: profile.graduation_year = grad_year
        
        profile.enrollment_number = request.POST.get('enrollment_number', profile.enrollment_number)
        
        cgpa_val = request.POST.get('cgpa')
        if cgpa_val: profile.cgpa = cgpa_val
        
        profile.linkedin_url = request.POST.get('linkedin_url', profile.linkedin_url)
        profile.twitter_handle = request.POST.get('twitter_handle', profile.twitter_handle)
        
        profile.save()
        
        messages.success(request, "Profile updated successfully!")
        return redirect('profile', section=section if section else 'details')

    # --- Fetching Course Enrollment Data ---
    # We fetch all enrollments and their related course data in one go
    all_enrollments = UserCourse.objects.filter(user=user).select_related('course')

    # Separate them for the frontend
    completed_courses = all_enrollments.filter(status='COMPLETED')
    in_progress_courses = all_enrollments.filter(status='IN_PROGRESS')

    context = {
        "user": user,
        "completed_courses": completed_courses,
        "in_progress_courses": in_progress_courses,
        "total_enrollments": all_enrollments.count(),
        "active_section": section
    }

    print(context)

    template_name = "profile-page-certificates.html" if section == "certificates" else "profile-page.html"
    return render(request, template_name, context)

@trace_span
@login_required(login_url="login")
def certificate_page(request):
    logger.info(f"User {request.user.id} accessed certificate page")
    return render(request, "profile-page-certificates.html")

@trace_span
@login_required(login_url="login")
def list_problems(request, course_id):
    logger.info(f"User {request.user.id} listing problems for course {course_id}")
    if not UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
        logger.warning(f"User {request.user.id} tried to list problems for unenrolled course {course_id}")
        return redirect("home")

    roadmap = None
    is_enrolled_user = False
    if UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
        is_enrolled_user = True
        roadmap = get_user_roadmap_html(user_id=request.user.id, course_id=course_id)

    # Gather all CourseContent for this course, ordered by sequence_number
    course_contents = CourseContent.objects.filter(
        course_id=course_id, 
        content__type='PROBLEM'
    ).select_related('content__problem').order_by('sequence_number')

    # Section grouping: section_title -> [problems]
    sections_map = {}
    for cc in course_contents:
        if not cc.content.problem:  # Should always be linked since type=PROBLEM, but be safe
            continue

        section_title = cc.section_title
        if section_title not in sections_map:
            sections_map[section_title] = {
                "id": section_title.lower().replace(" ", "-"),
                "title": section_title,
                "type": "problems",
                "problems": []
                }

        problem_obj = cc.content.problem
        # Determine user problem status based on submissions (if available)
        submission = ProblemSubmission.objects.filter(
            user=request.user, problem=problem_obj, course_id = course_id
        ).order_by('-submitted_at').first()
        if submission:
            status = submission.status.lower()
        else:
            status = "unsolved"

        sections_map[section_title]["problems"].append({
            "id": problem_obj.file_name,
            "title": problem_obj.title,
            "difficulty": problem_obj.difficulty.lower(),
            "status": status,
            "solution": problem_obj.solution_link or "#",
            "video": problem_obj.video_link or "#",
            "tags": [],  # Optional: you can add custom tags field to Problem model later
        })
    
    # Convert sections_map to list and add section number as prefix (as in your sample)
    sections = []
    for idx, (sec_title, section) in enumerate(sections_map.items(), 1):
        section = dict(section)  # Make a copy
        section["title"] = f"{idx}. {section['title']}"
        sections.append(section)
    
    print("SECTIONS : ",sections)

    context = {
        "is_freemium": not is_enrolled_user,
        "roadmap": roadmap,
        "course_id": course_id,
        "sections_js_json": json.dumps(sections)
    }
    return render(request, "list-problems.html", context)

@trace_span
@login_required(login_url="login")
def list_content(request, course_id):
    logger.info(f"User {request.user.id} listing content for course {course_id}")
    if not UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
        logger.warning(f"User {request.user.id} tried to list content for unenrolled course {course_id}")
        return redirect("home")

    # Sidebar logic (excludes single 'PROBLEM' but keeps 'PROBLEMS')
    roadmap = get_user_roadmap_html(user_id=request.user.id, course_id=course_id)

    # Fetch Content: We exclude single 'PROBLEM' types (IDE), 
    # but we KEEP 'PROBLEMS' (lists/practice sets) matches your sidebar logic.
    course_contents = CourseContent.objects.filter(
        course_id=course_id
    ).exclude(
        content__type='PROBLEM' 
    ).select_related('content').order_by('sequence_number')

    user_progress_map = {
        p.content_id: p 
        for p in UserContentProgress.objects.filter(user=request.user, course_id=course_id)
    }

    sections_map = {}
    
    for cc in course_contents:
        section_title = cc.section_title
        if section_title not in sections_map:
            sections_map[section_title] = {
                "id": section_title.lower().replace(" ", "-"),
                "title": section_title,
                "contents": []
            }

        # Status Logic
        status = 'pending'
        progress = user_progress_map.get(cc.content.id)
        if progress:
            if progress.is_completed: status = 'completed'
            elif progress.is_locked: status = 'locked'
        
        # --- TYPE MAPPING ---
        content_type = cc.content.type 
        frontend_type = 'article' # default fallback
        duration_text = "5 min"

        if content_type == 'VIDEO':
            frontend_type = 'video'
            duration_text = "10 min"
        elif content_type == 'QUIZ':
            frontend_type = 'quiz'
            duration_text = "Assessment"
        elif content_type == 'PROBLEMS':  # <--- HERE IS THE NEW TYPE
            frontend_type = 'problems'    # This string is sent to JS
            duration_text = "Practice"
        
        sections_map[section_title]["contents"].append({
            "id": cc.content.id,
            "title": cc.content.title,
            "type": frontend_type,
            "status": status,
            "duration": duration_text,
            "url": f"/content/{course_id}/{cc.content.file_name}/" 
        })

    sections = []
    for idx, (title, data) in enumerate(sections_map.items(), 1):
        data["title"] = f"{idx}. {title}"
        sections.append(data)

    context = {
        "is_freemium": False,
        "roadmap": roadmap,
        "course_id": course_id,
        "content_js_json": json.dumps(sections)
    }
    
    return render(request, "course_content.html", context)

@trace_span
@login_required(login_url="login")
def checkout(request, course_id):
    logger.info(f"User {request.user.id} initiated checkout for course {course_id}")
    if UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
            logger.info(f"User {request.user.id} already enrolled in {course_id}, redirecting to my-courses")
            return redirect("my-courses")
    
    course = get_object_or_404(Course, id=course_id)
    try:
        phonepe_client = setup_phonepe_client()
        payment_link, ui_redirect_url = get_checkout_page_url(request, phonepe_client, course)
    except Exception as e:
        logger.error(f"Error generating payment link for user {request.user.id}, course {course_id}: {e}", exc_info=True)
        messages.error(request, "Unable to initiate payment. Please try again later.")
        return redirect('course-catalog')

    context = {
        "payment_link" : payment_link,
        "course" : course,
        "selling_price" : int(course.base_price) + 1000,
        "platform_fees" : 0,
        "total_price" : int(course.base_price),
        "ui_redirect_url" : ui_redirect_url
    }

    return render(request, "checkout.html", context=context)

@trace_span
def payment_status(request):
    merchant_order_id = request.GET.get('txn_id')
    logger.info(f"Payment status callback received for transaction: {merchant_order_id}")

    #TODO : verify the txn_id from DB
    
    try:
        phonepe_client = setup_phonepe_client()
        order_status = get_order_status(request, phonepe_client, merchant_order_id)
        logger.info(f"Payment status for {merchant_order_id}: {order_status.state}")

        if order_status.state == "COMPLETED":
            course_id = order_status.meta_info.udf2
            if not UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
                logger.info(f"Payment successful, enrolling user {request.user.id} in course {course_id}")
                enroll_course(request, course_id)
            
                order, created = Order.objects.get_or_create(
                order_id = order_status.order_id,
                defaults = {
                    'user': request.user,
                    'total_amount': int(order_status.amount)//100,
                    'status': 'COMPLETED',
                    'payment_status': 'PAID',
                    'transaction_id': merchant_order_id,
                }
                )
    except Exception as e:
        logger.error(f"Error processing payment status for {merchant_order_id}: {e}", exc_info=True)
        # Handle error appropriately in UI
        return render(request, 'payment_status.html', {'status': 'ERROR'})

    context = {
        'status': order_status.state,
        'course': {
            'name': order_status.meta_info.udf3,
            'id': order_status.meta_info.udf2,
        },
        'total_price': int(order_status.amount)//100,
        'order_id': order_status.order_id,
        'transaction_id': merchant_order_id,
        'payment_date': '2024-01-20 14:30:00'
    }
    
    return render(request, 'payment_status.html', context)

@trace_span
def show_certificate(request):
    certificate_id = request.GET.get('certificate_id')
    logger.info(f"Certificate page accessed for ID: {certificate_id}")
    
    if certificate_id == ""  or certificate_id == None:
        #Default Values
        context = {}
        context["name"] = "Your Full Name"
        context["course_name"] = "Advanced Web Development & Full-Stack Engineering"
        context["completion_date"] = datetime.now()
        context["certificate_id"] = "NCS-2023-06-15-8472"
        return render(request, 'certificate.html', context=context)
    
    user_course = get_object_or_404(UserCourse, certificate_id=certificate_id)

    context = {
        "name" : user_course.user.first_name + " " + user_course.user.last_name,
        "course_name" : user_course.course.name,
        "completion_date" : user_course.completion_date,
        "certificate_id" : user_course.certificate_id,
    }
    return render(request, 'certificate.html', context=context)

@trace_span
def terms_and_conditions(request):
    logger.info("Terms and Conditions page accessed")
    return render(request, "terms-and-conditions.html")

@trace_span
def privacy_policy(request):
    logger.info("Privacy Policy page accessed")
    return render(request, "privacy-policy.html")

@trace_span
def refund_policy(request):
    logger.info("Refund Policy page accessed")
    return render(request, "refund-policy.html")

@trace_span
def contact_us(request):
    logger.info("Contact Us page accessed")
    return render(request, "contact-us.html")

@trace_span
def about_us(request):
    logger.info("About Us page accessed")
    return render(request, "about-us.html")

@trace_span
@login_required(login_url="login")
def problem_solver(request, course_id):
    problem_file_id = request.GET.get('id')
    content_id = request.GET.get('content_id')  # Optional
    course_id = course_id    # Optional
    
    logger.info(f"User {request.user.id} accessed problem solver: {problem_file_id} (Course: {course_id})")

    try:
        problem = Problem.objects.get(file_name=problem_file_id)
    except Problem.DoesNotExist:
        logger.error(f"Problem not found: {problem_file_id}")
        return HttpResponseNotFound("Problem not found")

    # Get or create user progress if content_id is provided
    # content_progress = None
    # if content_id and course_id:
    #     try:
    #         content = Content.objects.get(id=content_id)
    #         course = Course.objects.get(id=course_id)
    #         content_progress, _ = UserContentProgress.objects.get_or_create(
    #             user=request.user,
    #             course=course,
    #             content=content,
    #             defaults={'is_locked': not content.coursecontent_set.get(course=course).is_unlocked_by_default}
    #         )
    #     except (Content.DoesNotExist, Course.DoesNotExist, CourseContent.DoesNotExist):
    #         pass

    # Get or create the single submission record
    submission, created = ProblemSubmission.objects.get_or_create(
        user=request.user,
        problem=problem,
        course_id = course_id,
        defaults={
            'submitted_code': problem.starter_code or "",
            'status': 'UNSOLVED',
            'course_id': course_id,
            'content_id': content_id
        }
    )

    context = {
        "problem": problem,
        "saved_code": submission.submitted_code,
        # "content_id": content_id,
        "course_id": course_id,
        "problem_id": problem.id,
        "submission_id": submission.id,  # Include submission ID for your API
        "is_solved": str(submission.status == 'SOLVED')
    }
    
    return render(request, "problem-solver.html", context)


@trace_span
@login_required
def my_courses(request):
    logger.info(f"User {request.user.id} accessed 'My Courses'")
    # Check eligibility for onboarding
    try:
        has_mobile = hasattr(request.user, 'profile') and request.user.profile.mobile_number
    except Exception:
        has_mobile = False

    if not has_mobile:
        return render(request, "onboarding_form.html", context = {
            "user" : request.user
        })


    # Get all enrolled courses with progress annotations
    enrolled_courses = UserCourse.objects.filter(user=request.user).select_related('course')
    
    #if a user is new or not having any course - enroll it to fremium course and send a Mail
    if len(enrolled_courses) == 0:
        logger.info(f"No courses found for user {request.user.id}, enrolling in freemium course")
        FREEMIUM_COURSE_ID = 101
        enroll_course(request, FREEMIUM_COURSE_ID)

        # since newly created, get course data
        enrolled_courses = UserCourse.objects.filter(user=request.user).select_related('course')

    courses_data = []
    for user_course in enrolled_courses:
        course = user_course.course
        
        # Get counts in single queries
        total_contents = CourseContent.objects.filter(course=course).exclude(content__type='PROBLEM').count()
        completed_contents = UserContentProgress.objects.filter(
            user=request.user,
            course=course,
            is_completed=True,
        ).exclude(content__type='PROBLEM').count()

        
        # Get all problems in this course (through content)
        problem_contents = Content.objects.filter(
            coursecontent__course=course,
            type='PROBLEM'
        ).count()
        
        # Count distinct solved problems for this user in this course
        solved_problems = ProblemSubmission.objects.filter(
            user=request.user,
            course=course,
            status='SOLVED'
        ).values('problem').distinct().count()

        
        # Calculate progress percentages
        module_progress = (completed_contents / total_contents * 100) if total_contents > 0 else 0
        problem_progress = (solved_problems / problem_contents * 100) if problem_contents > 0 else 0
        is_course_completed = ((int(module_progress) + int(problem_progress)) // 2) >= 100
        
        #update course completion status
        if is_course_completed:
            if user_course.status != "COMPLETED":
                logger.info(f"User {request.user.id} completed course {course.id}. Generating certificate.")
                user_course.status = "COMPLETED"
                user_course.certificate_id = generate_certificate_id(request.user.id, user_course.course_id)
                user_course.completion_date = datetime.now()
                user_course.save()
        
        # check if the course is unlocked
        batch = getattr(user_course, "batch", None)
        now = timezone.now()
        start_date = batch.start_date if batch else user_course.enrollment_date
        is_unlocked = start_date <= now

        courses_data.append({
            'course': course,
            'user_course': user_course,
            'module_progress': round(module_progress),
            'problem_progress': round(problem_progress),
            'total_modules': total_contents,
            'completed_modules': completed_contents,
            'total_problems': problem_contents,
            'solved_problems': solved_problems,
            'is_premium': course.is_premium,
            'is_course_completed' : is_course_completed,
            'certificate_id' : user_course.certificate_id,
            "is_course_unlocked": is_unlocked,
            "course_start_date" : start_date,
        })
    
    return render(request, 'my_courses.html', {'courses': courses_data})

@trace_span
def generate_certificate_id(user_id, course_id):
    """
    Generate certificate ID in format: NCS-YYYY-MM-DD-{user_id}-{course_id}
    """
    today = timezone.now().date()
    return f"NCS-{today.year}-{today.month:02d}-{today.day:02d}-{user_id}-{course_id}"

@trace_span
@login_required
def continue_course(request, course_id):
    logger.info(f"User {request.user.id} continuing course {course_id}")
    # Get the user's course enrollment
    user_course = get_object_or_404(
        UserCourse,
        user=request.user,
        course_id=course_id
    )
    
    # If they have a current content, go to that
    if user_course.current_content:
        return redirect('view-content', content_id=user_course.current_content.id)
    
    # Otherwise, find the first content they haven't completed
    next_content = CourseContent.objects.filter(
        course=user_course.course
    ).exclude(
        content__usercontentprogress__user=request.user,
        content__usercontentprogress__is_completed=True,
        content__type='PROBLEM',
    ).order_by('sequence_number').first()
    
    if next_content:
        # Update their current content
        user_course.current_content = next_content.content
        user_course.save()
        return redirect('view-content', content_id=next_content.content.id)
    
    # If all content is completed, go to the first content
    first_content = CourseContent.objects.filter(
        course=user_course.course
    ).order_by('sequence_number').first()
    
    if first_content:
        return redirect('view-content', content_id=first_content.content.id)
    
    # Fallback - redirect to course list with message
    logger.info(f"No content found for course {course_id}, redirecting to course list")
    messages.info(request, "This course doesn't have any content yet.")
    return redirect('my-courses')

from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .models import UserContentProgress, Content, Course, UserCourse

@trace_span
@login_required
def view_content(request, course_id, content_file_id):
    logger.info(f"User {request.user.id} viewing content {content_file_id} in course {course_id}")
    with transaction.atomic():
        # Get course and content objects
        course = get_object_or_404(Course, id=course_id)
        content = get_object_or_404(Content, file_name=content_file_id)

        if not UserCourse.objects.filter(user=request.user, course=course).exists():
            logger.warning(f"User {request.user.id} tried to view content in unenrolled course {course_id}")
            return render(request, "index.html")
        
        # Get user enrollment for batch/date info
        user_enrollment = UserCourse.objects.get(user=request.user, course=course)

        # Get Current Course Content object
        current_course_content = get_object_or_404(
            CourseContent, 
            course=course, 
            content=content
        )
        
        # Determine the reference start date
        if user_enrollment.batch:
            start_date = user_enrollment.batch.start_date.date()
        else:
            start_date = user_enrollment.enrollment_date.date()

        # --- LOGIC TO CHECK NEXT CONTENT LOCK STATUS ---
        # Find the next content in the sequence
        next_content_obj = CourseContent.objects.filter(
            course=course,
            sequence_number__gt=current_course_content.sequence_number,
        ).exclude(content__type='PROBLEM').order_by('sequence_number').first()

        is_next_drip_locked = False
        next_unlock_date = None
    
        if next_content_obj:
            raw_unlock_date = start_date + timedelta(days=next_content_obj.unlock_days)
            today = timezone.localdate()
    
            if raw_unlock_date > today:
                is_next_drip_locked = True
                naive_unlock = datetime.combine(raw_unlock_date, time.min)
                next_unlock_date = timezone.make_aware(naive_unlock, timezone.get_current_timezone())
            else:
                next_unlock_date = raw_unlock_date

            logger.info(
                f"Drip Check - User: {request.user.id} Conetnt: {content.pk}| "
                f"Today: {today} | "
                f"Start Date: {start_date} | "
                f"Raw Unlock Date: {raw_unlock_date} | "
                f"Final Unlock DT: {next_unlock_date}"
            )
        

        roadmap = get_user_roadmap_html(user_id=request.user.id, course_id=course_id)
        
        user_course, _ = UserCourse.objects.get_or_create(
            user=request.user,
            course=course,
            defaults={'current_content': content}
        )

        user_course.current_content = content
        user_course.save()
        
        progress, _ = UserContentProgress.objects.get_or_create(
            user=request.user,
            course=course,
            content=content,
            defaults={
                'is_locked': False,
                'last_accessed': timezone.now()
            }
        )
        
        # Handle POST request to mark as completed
        if request.method == 'POST' and 'mark_completed' in request.POST:
            logger.info(f"User {request.user.id} marking content {content_file_id} as completed")
            
            # 1. Mark CURRENT content as completed (Always allowed)
            progress.is_completed = True
            progress.completed_at = timezone.now()
            progress.save()
            
            # Clear sidebar cache
            memorycache_sidebar[str(request.user.id)+str(course_id)] = None
            
            # 2. Handle Navigation to Next
            if next_content_obj:
                # If next content is strictly TIME-LOCKED, we don't move the user there
                if is_next_drip_locked:
                    logger.info(f"Next content locked for user {request.user.id}. Unlock date: {next_unlock_date}")
                    messages.info(request, f"Great job! The next lesson unlocks on {next_unlock_date.strftime('%B %d')}.")
                    # Stay on current page, but with completed status
                    return redirect(reverse('content', kwargs={
                        'course_id': course.id,
                        'content_file_id': content.file_name 
                    }))
                
                # If NOT locked, unlock it and move user
                user_course.current_content = next_content_obj.content
                user_course.save()
                
                UserContentProgress.objects.update_or_create(
                    user=request.user,
                    course=course,
                    content=next_content_obj.content,
                    defaults={'is_locked': False}
                )
                
                return redirect(reverse('content', kwargs={
                    'course_id': course.id,
                    'content_file_id': next_content_obj.content.file_name 
                }))
            
            # No next content (End of course)
            logger.info(f"End of course content reached for course {course_id}")
            return redirect(reverse('content', kwargs={
                'course_id': course.id,
                'content_file_id': content.file_name 
            }))
        
        # Prepare context
        context = {
            'course': course,
            'content': content,
            'user_course': user_course,
            'progress': progress,
            'is_completed': progress.is_completed,
            'content_file_id': content.file_name,
            'roadmap': roadmap,
            'course_id': course_id,
            # --- PASSING NEXT CONTENT INFO TO TEMPLATE ---
            'is_next_drip_locked': is_next_drip_locked,
            'next_unlock_date': next_unlock_date,
        }

        print(context)

        if content.type.lower() == "quiz":
            quiz_submission = QuizSubmission.objects.get_or_create(
                user=request.user,
                content=content,
                course=course,
                defaults={
                    "course":course,
                    "quiz_data":content.quiz_data,
                    "correct_answers": 0
                }
            )[0]
            
            context['quiz_submission'] = quiz_submission
            context['quiz_data'] = json.dumps(content.quiz_data)
            context['quiz_score'] = quiz_submission.score
            context['quiz_passed'] =  quiz_submission.passed
            context['quiz_correct_answer_count'] =  quiz_submission.correct_answers
            context['quiz_attempt'] =  quiz_submission.attempt_number

            return render(request, "view_quiz_content.html", context)

        if content.type.lower() == "problem":
            return render(request, "view_problem_content.html", context)
        
        if content.type.lower() == "problems":
            problem_ids = json.loads(content.content_text).get("problem_ids")
            contents = bulk_fetch_content_content(request.user, course, problem_ids)
            context["contents"] = contents
            return render(request, "view_problems_content.html", context)
        
    
        return render(request, "view_content.html", context)

@trace_span
def problems_catalog(request, course_id):
    logger.info(f"Problem catalog accessed for course {course_id}")
    # 1. Get the Course
    course = get_object_or_404(Course, id=course_id)

    # 2. Gather all CourseContent (Reuse existing logic)
    course_contents = CourseContent.objects.filter(
        course_id=course_id, 
        content__type='PROBLEM'
    ).select_related('content__problem').order_by('sequence_number')

    # 3. Section grouping: section_title -> [problems]
    sections_map = {}
    
    for cc in course_contents:
        if not cc.content.problem:
            continue

        section_title = cc.section_title
        
        # Initialize section if not exists
        if section_title not in sections_map:
            sections_map[section_title] = {
                "id": section_title.lower().replace(" ", "-"),
                "title": section_title,
                "type": "problems",
                "problems": []
            }

        problem_obj = cc.content.problem

        # Construct Problem Data
        # Note: Since this is public, we default status to 'unsolved' 
        # or we don't include solution/video links if you want to hide them.
        sections_map[section_title]["problems"].append({
            # IMPORTANT: Ensure this matches what your 'problem_solver' view expects.
            # If your solver expects a database integer ID, use problem_obj.id
            # If it expects a string slug, use problem_obj.file_name
            "id": problem_obj.id, 
            "title": problem_obj.title,
            "difficulty": problem_obj.difficulty.lower(),
            "status": "unsolved", # Default status for public view
            "tags": [], 
        })

    # 4. Convert to list and add numbering
    sections = []
    for idx, (sec_title, section) in enumerate(sections_map.items(), 1):
        section_data = section.copy() # Safe copy
        section_data["title"] = f"{idx}. {section_data['title']}"
        sections.append(section_data)
    
    is_user_enrolled = False
    if request.user.is_authenticated:
        is_user_enrolled = UserCourse.objects.filter(
            user=request.user, 
            course=course
        ).exists()



    # 5. Build the context
    context = {
        'course': course,        # Useful for showing the Course Title in the header
        'course_id': course_id,  # Required for the {% url %} tag in the template
        'sections_js_json': json.dumps(sections), # The data for the JS
        'is_user_enrolled_to_course' : is_user_enrolled
    }
    
    return render(request, "problems_catalog.html", context)

@trace_span
def course_catalog(request):
    logger.info("Course catalog accessed")
    # 1. Fetch Courses
    # Changed 'course_content' to 'contents' based on your error message
    courses = Course.objects.all().annotate(
        total_problems=Count(
            'contents', 
            filter=Q(contents__content__type='PROBLEM')
        )
    ).values('id', 'name', 'description', 'language', 'total_problems') 
    # Note: I also changed 'title' to 'name' based on your field list

    # 2. Prepare Data for JavaScript
    courses_data = list(courses)

    # 3. Normalization (Renaming keys to match what the JS expects)
    # The JS expects 'title' and 'level', but your model has 'name' and 'language'
    normalized_data = []
    for c in courses_data:
        normalized_data.append({
            'id': c['id'],
            'title': c['name'], # Map 'name' to 'title'
            'description': c['description'] or '',
            'level': c['language'] or 'All Levels', # Using language as the "meta tag"
            'total_problems': c['total_problems']
        })

    context = {
        'courses_js_json': json.dumps(normalized_data),
    }

    return render(request, 'course_catalog.html', context)


@trace_span
def bulk_fetch_content_content(user, course, problem_ids):
    """Optimized bulk fetch using prefetch_related"""
    
    # Build problem to content mapping
    contents = []
    for id in problem_ids:
        course_content = Content.objects.filter(
            problem__id = id,
            coursecontent__course=course
        ).first()

        user_progress = UserContentProgress.objects.filter(
            content=course_content,
            user=user,
            course=course
        ).first()

        print(user_progress)

        contents.append({
            "content" : course_content,
            "is_completed" : user_progress.is_completed
        })

        print(course_content)
    
    
    return contents


'''
   HANDLERS
'''
@trace_span
def get_user_roadmap_html(user_id, course_id):
    # Get all user progress records in one query
    # cached_result = memorycache_sidebar.get(user_id+course_id)
    # if cached_result is not None:
    #     print(f"CACHE FOUND : for id {user_id+course_id}")
    #     return cached_result
    
    user_progress = {
        up.content_id: up 
        for up in UserContentProgress.objects.filter(
            user_id=user_id,
            course_id=course_id
        ).exclude(
            content__type='PROBLEM'
        ).select_related('content')
    }

    # Get all course contents
    course_contents = (
        CourseContent.objects
        .filter(course_id=course_id)
        .exclude(content__type='PROBLEM')  # Exclude PROBLEM type
        .select_related('content')
        .order_by('sequence_number')
    )
    
    roadmap = {}
    for cc in course_contents:
        progress = user_progress.get(cc.content_id)
        
        if cc.section_title not in roadmap:
            roadmap[cc.section_title] = {
                'contents': [],
                'completed_count': 0,
                'total_count': 0
            }
        
        # Determine content status 
        if progress and progress.is_completed:
            status = 'completed'
            roadmap[cc.section_title]['completed_count'] += 1
        elif progress and progress.is_locked:
            status = 'locked'
        else:
            status = 'pending'
        
        roadmap[cc.section_title]['contents'].append({
            'title': cc.content.title,
            'status': status,
            'url': f"/content/{course_id}/{cc.content.file_name}/",
            'type': cc.content.type.lower()
        })
        roadmap[cc.section_title]['total_count'] += 1
    
    # Prepare final result with section statuses
    result = []
    for section_title, data in roadmap.items():
        # Determine section status
        if data['completed_count'] == data['total_count']:
            section_status = 'completed'
        elif any(c['status'] == 'pending' for c in data['contents']):
            section_status = 'pending'
        else:
            section_status = 'locked'
        
        result.append({
            'title': section_title,
            'status': section_status,
            'url': '#',
            'contents': data['contents'],
            'has_submenu': len(data['contents']) > 1
        })
    
    memorycache_sidebar[user_id+course_id] = result
    print(f"CACHE SET : for id {user_id+course_id}")
    
    return result


@trace_span
def get_user_roadmap(user_id, course_id):
    roadmap_data = (
        CourseContent.objects
        .filter(course_id=course_id)
        .annotate(
            section_status=Case(
                # Section is completed if all its contents are completed
                When(
                    content__usercontentprogress__user_id=user_id,
                    content__usercontentprogress__is_completed=True,
                    then=Value('completed')
                ),
                # Section is pending if some contents are completed/pending
                When(
                    content__usercontentprogress__user_id=user_id,
                    then=Value('pending')
                ),
                # Default to locked
                default=Value('locked'),
                output_field=models.CharField()
            ),
            # For the content items
            content_status=Case(
                When(
                    content__usercontentprogress__user_id=user_id,
                    content__usercontentprogress__is_completed=True,
                    then=Value('completed')
                ),
                When(
                    content__usercontentprogress__user_id=user_id,
                    then=Value('pending')
                ),
                default=Value('locked'),
                output_field=models.CharField()
            ),
            # Check if content is locked for this user
            is_content_locked=Case(
                When(
                    content__usercontentprogress__user_id=user_id,
                    content__usercontentprogress__is_locked=False,
                    then=Value(False)
                ),
                default=Value(True),
                output_field=BooleanField()
            )
        )
        .order_by('sequence_number')
    )
    
    # Organize the data into the required format
    roadmap = []
    current_section = None
    
    for item in roadmap_data:
        # If this is a new section
        if current_section is None or current_section['section_title'] != item.section_title:
            # Determine section status (completed if all contents are completed)
            section_contents = roadmap_data.filter(section_title=item.section_title)
            section_completed = all(
                content.content_status == 'completed' 
                for content in section_contents
            )
            section_pending = any(
                content.content_status in ['completed', 'pending']
                for content in section_contents
            )
            
            section_status = 'completed' if section_completed else (
                'pending' if section_pending else 'locked'
            )
            
            current_section = {
                'section_title': item.section_title,
                'status': section_status,
                'contents': []
            }
            roadmap.append(current_section)
        
        # Add the content to the current section
        current_section['contents'].append({
            'title': item.content.title,
            'status': item.content_status,
            'is_locked': item.is_content_locked
        })
    
    return roadmap



'''
   INTERNAL APIS
'''
@trace_span
@csrf_exempt
@api_view(['POST', 'OPTIONS'])
@permission_classes([AllowAny])
def save_code(request):
    if request.method == 'OPTIONS':
        return Response()
    
    try:
        data = request.data
        problem_file_id = data['problem_id']
        code = data['code']
        course_id  = int(data['course_id'])
        failed_count = int(data.get('failed_count', 0))
        
        logger.info(f"Received code submission from User {request.user.id} for Problem {problem_file_id} (Course: {course_id})")

        problem = Problem.objects.filter(file_name=problem_file_id).first()
        if not problem:
            logger.error(f"Problem not found in save_code: {problem_file_id}")
            return Response({"error": "Problem not found"}, status=404)
        
        course = Course.objects.get(id=course_id)

        # Determine status based on failed_count
        status = 'SOLVED' if failed_count == 0 else 'ATTEMPTED'
        print("\n\nSTATUS:", status, "Problem ID:", problem_file_id)
        
        # Get or create the submission
        submission, created = ProblemSubmission.objects.update_or_create(
            problem=problem,
            course = course,
            user=request.user,
            defaults={
                'submitted_code': code,
                'status': status,
                "course_id" : course_id,
                # "content_id" : ,
                'execution_time': data.get('execution_time'),
                'test_results': data.get('test_results')
            }
        )

        #update 
        content = get_object_or_404(Content, problem=problem, coursecontent__course_id=course_id)
    
        user_content_progress = UserContentProgress.objects.get(
            user=request.user,
            course_id=course_id,
            content=content,
            content__problem = problem
        )
        
        if not user_content_progress.is_completed and status == 'SOLVED':
            logger.info(f"User {request.user.id} solved problem {problem_file_id}, marking progress complete")
            user_content_progress.is_completed = True
            user_content_progress.completed_at = timezone.now()
            user_content_progress.save()

        
        response_data = {
            "message": "Data received successfully",
            "your_data": {
                "code": code,
                "failed_count": failed_count,
                "problem_id": problem_file_id,
                "submission_id": submission.id,
                "status": status
            }
        }
        return Response(response_data, status=200)
        
    except KeyError as e:
        logger.error(f"Missing key in save_code request data: {str(e)}", exc_info=True)
        print(f"Missing key in request data: {str(e)}")
        return Response(
            {"error": f"Missing required field: {str(e)}"},
            status=400
        )
    except Exception as e:
        logger.error(f"Error in save_code: {str(e)}", exc_info=True)
        print(f"Error in save_code: {str(e)}")
        return Response(
            {"error": str(e)},
            status=500
        )


@trace_span
@csrf_exempt
@api_view(['POST', 'OPTIONS'])
@permission_classes([AllowAny])
def save_quiz_data(request):
    if request.method == "POST":
        try:
            #read from API
            quiz_data = request.data.get('quiz_data')
            content_id = request.data.get('content_id')
            course_id = request.data.get('course_id')
            is_passed = bool(request.data.get('is_passed'))
            
            logger.info(f"User {request.user.id} submitting quiz data for content {content_id} (passed: {is_passed})")

            #make data to save
            total_quetions = len(quiz_data)
            correct_answer_count = 0

            for record in quiz_data:
                print(type(record))
                if record.get("isCorrect") == True:
                    correct_answer_count += 1
            
            print("Extra details", total_quetions, is_passed, content_id, course_id)

            content = Content.objects.get(pk=content_id)
            course = Course.objects.get(pk=course_id)
            existing_record = QuizSubmission.objects.filter(content = content, course = course, user = request.user).first()
            score = (correct_answer_count/total_quetions)*100

            # # if passed - handle content completion update
            # if is_passed:
            #     # Get or create content progress
            #     course_content = get_object_or_404(
            #         CourseContent, 
            #         course=course, 
            #         content=content
            #     )

            #     print("course_content", course_content)

            #     progress = get_object_or_404(
            #         UserContentProgress,
            #         user=request.user,
            #         course=course,
            #         content=content
            #     )
                
            #     print("progress", progress)

            #     # Handle POST request to mark as completed
            #     if course_content and progress:
            #         progress.is_completed = True
            #         progress.completed_at = timezone.now()
            #         progress.save()
                    
            #         # Get next content in sequence
            #         next_content = CourseContent.objects.filter(
            #             course=course,
            #             sequence_number__gt=course_content.sequence_number
            #         ).order_by('sequence_number').first()
                    
            #         print("next content", next_content)
            #         if next_content:
            #             user_course = get_object_or_404(
            #                 UserCourse,
            #                 user=request.user,
            #                 course=course
            #             )
                            
            #             # Update user's current content
            #             user_course.current_content = next_content.content
            #             user_course.save()
                        
            #             # Unlock the next content
            #             user_content_progress = get_object_or_404(
            #                 UserContentProgress,
            #                 user = request.user,
            #                 course = course,
            #                 content = next_content.content
            #             )
            #             user_content_progress.is_locked = False
            #             user_content_progress.save()

            #             print("marked as completed and unloack next content")
                    

            if int(existing_record.score) < 100:
                existing_record.total_questions = total_quetions
                existing_record.correct_answers = max(existing_record.correct_answers, correct_answer_count)
                existing_record.score = max(existing_record.score, score)
                existing_record.user_answers = json.dumps(quiz_data)
                if not existing_record.passed:
                    existing_record.passed = is_passed 
                    existing_record.attempt_number += 1
                
                existing_record.started_at = timezone.now()
                # existing_record.time_taken = timezone.now()
                
            existing_record.save()
            logger.info(f"Quiz data saved successfully for user {request.user.id}, score: {score}")

            # Process your quiz_data here...
            print("Received:", quiz_data)

            return JsonResponse({"status": "success", "message": "Quiz data saved successfully"})
        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON in save_quiz_data: {e}", exc_info=True)
            return JsonResponse({"error": "Invalid JSON"}, status=400)
        except Exception as e:
            logger.error(f"Error in save_quiz_data: {e}", exc_info=True)
            return JsonResponse({"error": str(e)}, status=500)
            
    return JsonResponse({"error": "Only POST method allowed"}, status=405)

@trace_span
def generate_password(length=8):
    alphabet = string.ascii_letters + string.digits  # ABC...XYZabc...xyz012...789
    return ''.join(secrets.choice(alphabet) for _ in range(length))

@trace_span
def enroll_course(request, course_id):
    logger.info(f"Enrollment requested for course {course_id} by user {request.user.id}")
    # Get the course or return 404 if not found
    course = get_object_or_404(Course, id=course_id)
    user = request.user
    
    # Check if user is already enrolled
    if UserCourse.objects.filter(user=user, course=course).exists():
        logger.warning(f"User {user.id} attempted double enrollment in {course_id}")
        messages.warning(request, 'You are already enrolled in this course!')
        return 
    
    try:
        # --- NEW: Batch Logic ---
        # Find a batch starting in the future, or default to the latest one
        current_batch = Batch.objects.filter(
            course=course,
            start_date__gte=timezone.now()
        ).order_by('start_date').first()
        
        # If no future batch, maybe get the most recent one? 
        if not current_batch:
            current_batch = Batch.objects.filter(course=course).last()
        # ------------------------

        # Create the UserCourse record
        user_course = UserCourse.objects.create(
            user=user,
            course=course,
            fees_paid=course.base_price,
            batch=current_batch,
            payment_status='PAID'
        )
        
        # Get all course contents ordered by sequence number
        course_contents = CourseContent.objects.filter(course=course).order_by('sequence_number')

        # Create UserContentProgress records for each content
        for index, course_content in enumerate(course_contents):

             # Set the first content as current if available
            if index == 0:
                user_course.current_content = course_content.content
                user_course.save()
            
            UserContentProgress.objects.create(
                user=user,
                course=course,
                content=course_content.content,
                is_locked=not (index == 0 and course_content.is_unlocked_by_default)
            )
        
        logger.info(f"Successfully enrolled user {user.id} in course {course.name}")
        messages.success(request, f'Successfully enrolled in {course.name}!')

        # Send enrollment email
        # send_course_enrollment_email(user, course, user_course, request)

        return 
    
    except Exception as e:
        logger.error(f"Error enrolling user {user.id} in course {course_id}: {str(e)}", exc_info=True)
        messages.error(request, f'Error enrolling in course: {str(e)}')
        return 

@trace_span
def generate_txn_id(prefix="TXN"):
    """
    Generate a unique transaction ID
    Format: TXN_YYYYMMDD_HHMMSS_XXXXXX
    """
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    random_suffix = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    return f"{prefix}_{timestamp}_{random_suffix}"

from phonepe.sdk.pg.payments.v2.standard_checkout_client import StandardCheckoutClient
from phonepe.sdk.pg.payments.v2.models.request.standard_checkout_pay_request import StandardCheckoutPayRequest
from phonepe.sdk.pg.common.models.request.meta_info import MetaInfo
from phonepe.sdk.pg.env import Env

@trace_span
def setup_phonepe_client():
    client_secret = credentials.get('PHONE_PAY_CLIENT_SECRET')
    client_id = credentials.get('PHONE_PAY_CLIENT_ID')
    client_version = credentials.get('PHONE_PAY_CLIENT_VERSION')
    env = Env.PRODUCTION if os.environ.get('ENV') == "production" else Env.SANDBOX

    print("PHONE_PAY_CLIENT_SECRET", client_secret)
    print("PHONE_PAY_CLIENT_ID", client_id)
    print("PHONE_PAY_CLIENT_VERSION", client_version)
    print("ENV", env)

    should_publish_events = True
    client = StandardCheckoutClient.get_instance(client_id=client_id,
                                                        client_secret=client_secret,
                                                        client_version=client_version,
                                                        env=env,
                                                        should_publish_events=should_publish_events)
    
    return client


@trace_span
def get_checkout_page_url(request, client, course):
    unique_order_id = str(generate_txn_id())
    logger.info(f"Generating PhonePe checkout URL. Order ID: {unique_order_id}")
    redirection_uri = credentials.get('PHONE_PAY_REDIRECTION_URI')
    ui_redirect_url = f"{redirection_uri}/order/status?txn_id={unique_order_id}"
    amount = (int(course.base_price)) * 100 
    meta_info = MetaInfo(
        udf1= f"{request.user.id}", 
        udf2= f"{course.id}", 
        udf3= f"{course.name}") 
    
    standard_pay_request = StandardCheckoutPayRequest.build_request(merchant_order_id=unique_order_id,
                                                                    amount=amount,
                                                                    redirect_url=ui_redirect_url,
                                                                    meta_info=meta_info)
    standard_pay_response = client.pay(standard_pay_request)
    checkout_page_url = standard_pay_response.redirect_url
    print("\n\n",checkout_page_url)
    return checkout_page_url, ui_redirect_url

@trace_span
def get_order_status(request, client, merchant_order_id):
    logger.info(f"Checking order status from PhonePe for {merchant_order_id}")
    response = client.get_order_status(merchant_order_id, details=False)
    return response

def email_sender(request):
    subject = 'Enroll | Namma Coding Shaale'
    html_message = render_to_string('email/push-notification.html')
    message = strip_tags(html_message)
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [request.user.email]
    
    try:
        send_mail(subject, message, email_from, recipient_list, html_message=html_message)
        logger.info(f"OTP email sent successfully to {request.user.email}")

    except Exception as e:
        logger.error(f"Failed to send OTP email to {request.user.email}: {str(e)}", exc_info=True)
        print(f"Failed to send OTP email: {str(e)}")

    return render(request, "index.html")

# --- Blog Management Service (SQL DB) ---

@trace_span
@login_required(login_url="login")
def blog_list(request):
    logger.info("Blog list page accessed")
    
    # Sort by date descending
    posts = Blog.objects.all().order_by('-created_at')
    
    search_query = request.GET.get('q', '').strip()
    if search_query:
        posts = posts.filter(
            Q(title__icontains=search_query) | 
            Q(content__icontains=search_query)
        )

    paginator = Paginator(posts, 6) # Show 6 posts per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, "blog/blog_list.html", {"posts": page_obj, "search_query": search_query})

@trace_span
@login_required(login_url="login")
def my_blogs(request):
    logger.info(f"User {request.user.username} accessing their blogs")
    posts = Blog.objects.filter(author=request.user).order_by('-created_at')
    return render(request, "blog/blog_list.html", {"posts": posts, "title": "My Blogs", "is_my_blogs": True})

@trace_span
@login_required(login_url="login")
def blog_create(request):
    if request.method == "POST":
        title = request.POST.get("title")
        content = request.POST.get("content")
        
        if not title or not content:
            messages.error(request, "Title and Content are required!")
            return render(request, "blog/blog_form.html", {"title": title, "content": content})
        
        Blog.objects.create(
            title=title,
            content=content,
            author=request.user
        )
        logger.info(f"New blog post created: {title} by {request.user.username}")
        messages.success(request, "Blog post published successfully!")
        return redirect("blog_list")

    return render(request, "blog/blog_form.html")

@trace_span
@login_required(login_url="login")
def blog_detail(request, post_id):
    post = get_object_or_404(Blog, id=post_id)
    
    # Recent posts excluding current one
    recent_posts = Blog.objects.exclude(id=post_id).order_by('-created_at')[:5]
    
    return render(request, "blog/blog_detail.html", {"post": post, "recent_posts": recent_posts})

@trace_span
@login_required(login_url="login")
def blog_update(request, post_id):
    post = get_object_or_404(Blog, id=post_id)
    
    if post.author != request.user:
        messages.error(request, "You are not authorized to edit this post.")
        return redirect("blog_list")

    if request.method == "POST":
        title = request.POST.get("title")
        content = request.POST.get("content")
        
        if not title or not content:
            messages.error(request, "Title and Content are required!")
            return render(request, "blog/blog_form.html", {"title": title, "content": content, "post_id": post_id})
        
        post.title = title
        post.content = content
        post.save()
        
        logger.info(f"Blog post updated: {title} by {request.user.username}")
        messages.success(request, "Blog post updated successfully!")
        return redirect("blog_detail", post_id=post_id)

    return render(request, "blog/blog_form.html", {"title": post.title, "content": post.content, "post_id": post.id})

@trace_span
@login_required(login_url="login")
def blog_delete(request, post_id):
    post = get_object_or_404(Blog, id=post_id)
    
    if post.author != request.user:
        messages.error(request, "You are not authorized to delete this post.")
        return redirect("blog_list")
    
    post.delete()
    logger.info(f"Blog post deleted: {post_id} by {request.user.username}")
    messages.success(request, "Blog post deleted successfully!")
    return redirect("blog_list")

@trace_span
def student_dashboard(request, username):
    logger.info(f"Student dashboard accessed for user: {username}")
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return HttpResponseNotFound("User not found")

    # 1. Total Problems Solved
    solved_problems_count = ProblemSubmission.objects.filter(
        user=user, 
        status='SOLVED'
    ).values('problem').distinct().count()

    # 2. Contents Done
    completed_contents_count = UserContentProgress.objects.filter(
        user=user, 
        is_completed=True
    ).count()

    # 3. Active Days & Heatmap Data
    # Collect dates from submissions
    submission_dates = ProblemSubmission.objects.filter(
        user=user
    ).values_list('submitted_at__date', flat=True)
    
    # Collect dates from content completion
    completion_dates = UserContentProgress.objects.filter(
        user=user,
        is_completed=True
    ).values_list('completed_at__date', flat=True)

    # Collect dates from content access (approximate)
    access_dates = UserContentProgress.objects.filter(
        user=user
    ).values_list('last_accessed__date', flat=True)

    # Combine all unique dates
    all_dates = set(submission_dates) | set(completion_dates) | set(access_dates)
    active_days_count = len(all_dates) - 1 if None in all_dates else len(all_dates) # Handle None if any
    
    # Filter out None and sort
    heatmap_dates = sorted([d.strftime("%Y-%m-%d") for d in all_dates if d is not None])

    # 4. Blogs
    blogs = Blog.objects.filter(author=user).order_by('-created_at')[:5]

    # 5. Charts Data
    
    # Difficulty Breakdown
    # 'problem__difficulty' lookups require 'problem' relation. 
    # ProblemSubmission relates to Problem.
    difficulty_counts = ProblemSubmission.objects.filter(
        user=user,
        status='SOLVED'
    ).values('problem__difficulty').annotate(count=Count('problem', distinct=True))
    
    difficulty_data = {
        'easy': 0,
        'medium': 0,
        'hard': 0
    }
    
    for item in difficulty_counts:
        diff = item.get('problem__difficulty', '').lower()
        if diff in difficulty_data:
            difficulty_data[diff] = item['count']

    # Language Breakdown (based on submissions)
    # Language Breakdown (based on submissions)
    # CHANGED: Filter for SOLVED and count unique problems
    language_counts = ProblemSubmission.objects.filter(
        user=user,
        status='SOLVED'
    ).values('problem__language').annotate(count=Count('problem', distinct=True))
    
    language_data = {}
    for item in language_counts:
        lang = item.get('problem__language', 'Unknown')
        language_data[lang] = item['count']


    # --- NEW METRICS ---

    # 6. Accuracy Rate
    total_submissions = ProblemSubmission.objects.filter(user=user).count()
    successful_submissions = ProblemSubmission.objects.filter(user=user, status='SOLVED').count()
    accuracy_rate = 0
    if total_submissions > 0:
        accuracy_rate = round((successful_submissions / total_submissions) * 100, 1)

    # 7. Course Progress Breakdown
    enrolled_courses = UserCourse.objects.filter(user=user).select_related('course')
    course_progress_data = []
    
    for user_course in enrolled_courses:
        course = user_course.course
        
        # Modules
        total_modules = CourseContent.objects.filter(course=course).exclude(content__type='PROBLEM').count()
        completed_modules = UserContentProgress.objects.filter(
            user=user, course=course, is_completed=True
        ).exclude(content__type='PROBLEM').count()
        
        mod_prog = (completed_modules / total_modules * 100) if total_modules > 0 else 0
        
        # Problems
        total_probs = Content.objects.filter(coursecontent__course=course, type='PROBLEM').count()
        solved_probs = ProblemSubmission.objects.filter(
            user=user, course=course, status='SOLVED'
        ).values('problem').distinct().count()
        
        prob_prog = (solved_probs / total_probs * 100) if total_probs > 0 else 0
        
        course_progress_data.append({
            'name': course.name,
            'module_progress': round(mod_prog),
            'problem_progress': round(prob_prog)
        })

    # 8. Submission Trend (Last 30 Days)
    # Use LOCAL time for 'today' to match the user's perspective (IST) and DB aggregation
    today = timezone.localtime(timezone.now()).date()
    thirty_days_ago = today - timedelta(days=29)
    
    daily_subs = ProblemSubmission.objects.filter(
        user=user,
        status='SOLVED',
        submitted_at__date__gte=thirty_days_ago
    ).values('submitted_at__date').annotate(count=Count('problem', distinct=True)).order_by('submitted_at__date')
    
    submission_map = {item['submitted_at__date'].strftime('%Y-%m-%d'): item['count'] for item in daily_subs}
    
    trend_labels = []
    trend_data = []
    
    # Fill missing dates with 0
    for i in range(30):
        d = thirty_days_ago + timedelta(days=i)
        d_str = d.strftime('%Y-%m-%d')
        trend_labels.append(d.strftime('%b %d')) # Label format: Jan 01
        trend_data.append(submission_map.get(d_str, 0))


    # --- NEW METRICS (STREAKS & QUIZZES) ---

    # 9. Quizzes Solved
    quizzes_solved_count = QuizSubmission.objects.filter(user=user, passed=True).count()

    # 10. Streaks Calculation
    # We already have `all_dates` set from metric #3
    sorted_dates = sorted([d for d in all_dates if d is not None])
    
    current_streak = 0
    longest_streak = 0
    
    if sorted_dates:
        # Longest Streak
        temp_streak = 1
        max_streak = 1
        
        for i in range(1, len(sorted_dates)):
            delta = sorted_dates[i] - sorted_dates[i-1]
            if delta.days == 1:
                temp_streak += 1
            else:
                max_streak = max(max_streak, temp_streak)
                temp_streak = 1
        longest_streak = max(max_streak, temp_streak)

        # Current Streak
        # Check if the last date is today or yesterday
        last_date = sorted_dates[-1]
        today_date = timezone.localtime(timezone.now()).date()
        
        if last_date == today_date or last_date == (today_date - timedelta(days=1)):
            current_streak = 1
            # Go backwards
            for i in range(len(sorted_dates) - 2, -1, -1):
                delta = sorted_dates[i+1] - sorted_dates[i]
                if delta.days == 1:
                    current_streak += 1
                else:
                    break
        else:
            current_streak = 0

    # 11. Recent Solved Problems (Unique)
    # Fetch last 30 solved submissions to find top 5 unique
    recent_subs = ProblemSubmission.objects.filter(
        user=user, status='SOLVED'
    ).select_related('problem', 'course').order_by('-submitted_at')[:30]
    
    seen_probs = set()
    recent_solved_problems = []
    for sub in recent_subs:
        if sub.problem.id not in seen_probs:
            seen_probs.add(sub.problem.id)
            # Create a simple dict for template
            recent_solved_problems.append({
                'title': sub.problem.title,
                'difficulty': sub.problem.difficulty.lower(), # easy, medium, hard
                'submitted_at': sub.submitted_at,
                # Try to link to problem solver if course exists, else just #
                'url': reverse('problem-solver', args=[sub.course.id]) + f"?file={sub.problem.file_name}" if sub.course else "#"
            })
            if len(recent_solved_problems) >= 5: 
                break


    context = {
        "profile_user": user,
        "solved_problems_count": solved_problems_count,
        "completed_contents_count": completed_contents_count,
        "active_days_count": active_days_count,
        "heatmap_dates": json.dumps(heatmap_dates),
        "blogs": blogs,
        "difficulty_data": json.dumps(difficulty_data),
        "language_data": json.dumps(language_data),
        "accuracy_rate": accuracy_rate,
        "course_progress_data": course_progress_data,
        "trend_labels": json.dumps(trend_labels),
        "trend_data": json.dumps(trend_data),
        "current_streak": current_streak,
        "longest_streak": longest_streak,
        "quizzes_solved_count": quizzes_solved_count,
        "recent_solved_problems": recent_solved_problems,
        # Ensure we pass the profile info if it exists
        "user_profile": getattr(user, 'profile', None) 
    }

    return render(request, "student_dashboard.html", context)

@trace_span
def student_report(request, username):
    logger.info(f"Student report accessed for user: {username} - Fixed Version Loaded")
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return HttpResponseNotFound("User not found")
        
    # --- Exact same metrics as dashboard, but specific View for Report (status='COMPLETED' fixed) ---
    
    # 1. Solved Problems
    solved_problems_count = ProblemSubmission.objects.filter(
        user=user, 
        status='SOLVED'
    ).values('problem').distinct().count()

    # 2. Content Completed
    completed_contents_count = UserCourse.objects.filter(
        user=user, 
        status='COMPLETED'
    ).count()

    # 3. Active Days (Total)
    active_days_count = ProblemSubmission.objects.filter(
        user=user
    ).dates('submitted_at', 'day').count()
    
    # 4. Heatmap (90 Days)
    today = timezone.now().date()
    three_months_ago = today - timedelta(days=90)
    activity_dates = ProblemSubmission.objects.filter(
        user=user, 
        submitted_at__date__gte=three_months_ago
    ).values_list('submitted_at__date', flat=True)
    heatmap_dates = [d.strftime("%Y-%m-%d") for d in set(activity_dates)]

    # 5. Difficulty Breakdown
    difficulty_counts = ProblemSubmission.objects.filter(
        user=user, status='SOLVED'
    ).values('problem__difficulty').annotate(count=Count('problem', distinct=True))
    difficulty_data = {item['problem__difficulty'].lower(): item['count'] for item in difficulty_counts}

    # 6. Trend (30 Days for Chart)
    # Re-using dashboard logic which calculates 'daily_subs' for last 30 days
    last_30_days = today - timedelta(days=29)
    submissions_last_30 = ProblemSubmission.objects.filter(
        user=user,
        submitted_at__date__gte=last_30_days,
        status='SOLVED'
    ).values('submitted_at__date').annotate(count=Count('id')).order_by('submitted_at__date')
    
    trend_map = {item['submitted_at__date'].strftime('%Y-%m-%d'): item['count'] for item in submissions_last_30}
    trend_labels = []
    trend_data = []
    for i in range(30):
        d_obj = (last_30_days + timedelta(days=i))
        trend_labels.append(d_obj.strftime("%b %d")) 
        trend_data.append(trend_map.get(d_obj.strftime("%Y-%m-%d"), 0))

    # 7. Recent Solved
    recent_solved_problems = []
    recent_submissions = ProblemSubmission.objects.filter(
        user=user, status='SOLVED'
    ).select_related('problem', 'course').order_by('-submitted_at')[:10] 

    seen_problems = set()
    for sub in recent_submissions:
        if sub.problem.id not in seen_problems:
             recent_solved_problems.append({
                 "title": sub.problem.title,
                 "difficulty": sub.problem.difficulty,
                 "submitted_at": sub.submitted_at,
                 "url": reverse('problem-solver', args=[sub.course.id]) + f"?file={sub.problem.file_name}" if sub.course else "#"
             })
             seen_problems.add(sub.problem.id)
             if len(recent_solved_problems) >= 5: break
             
    # 8. Course Progress (needed for report)
    enrolled_courses = UserCourse.objects.filter(user=user).select_related('course')
    course_progress_data = []
    for user_course in enrolled_courses:
        course = user_course.course
        total_modules = CourseContent.objects.filter(course=course).exclude(content__type='PROBLEM').count()
        completed_modules = UserContentProgress.objects.filter(user=user, course=course, is_completed=True).exclude(content__type='PROBLEM').count()
        mod_prog = (completed_modules / total_modules * 100) if total_modules > 0 else 0
        
        total_probs = Content.objects.filter(coursecontent__course=course, type='PROBLEM').count()
        solved_probs = ProblemSubmission.objects.filter(user=user, course=course, status='SOLVED').values('problem').distinct().count()
        prob_prog = (solved_probs / total_probs * 100) if total_probs > 0 else 0
        
        course_progress_data.append({
            'name': course.name,
            'module_progress': round(mod_prog),
            'problem_progress': round(prob_prog)
        })

    # 9. Quizzes Solved
    quizzes_solved_count = QuizSubmission.objects.filter(user=user, passed=True).count()

    # Context
    context = {
        "profile_user": user,
        "solved_problems_count": solved_problems_count,
        "completed_contents_count": completed_contents_count,
        "active_days_count": active_days_count,
        "heatmap_dates": json.dumps(heatmap_dates),
        "difficulty_data": json.dumps(difficulty_data),
        "trend_labels": json.dumps(trend_labels),
        "trend_data": json.dumps(trend_data),
        "recent_solved_problems": recent_solved_problems,
        "course_progress_data": course_progress_data,
        "user_profile": getattr(user, 'profile', None),
        "quizzes_solved_count": quizzes_solved_count,
    }
    
    return render(request, "student_report.html", context)

@trace_span
def calculate_leaderboard_data(timeframe='overall'):
    # Fetch all non-staff users
    # In a real app with millions of users, this would be optimized with aggregation queries.
    # For now, we iterate as per the request context and typical scale.
    users = User.objects.filter(is_staff=False)
    leaderboard_data = []

    now = timezone.localtime(timezone.now())
    start_of_month = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

    for user in users:
        points = 0
        
        # --- Filters for timeframe ---
        date_filter_submission = Q()
        date_filter_progress = Q()
        date_filter_quiz = Q()
        date_filter_access = Q() # For active days via last_accessed
        
        if timeframe == 'monthly':
            date_filter_submission = Q(submitted_at__gte=start_of_month)
            date_filter_progress = Q(completed_at__gte=start_of_month)
            date_filter_quiz = Q(completed_at__gte=start_of_month) # QuizSubmission class has completed_at
            # last_accessed is a single field that updates constantly. 
            # We can only count it if it falls in this month (which means user was active recently).
            # But this is imperfect for historical monthly data. 
            # Ideally we'd have an ActivityLog. 
            # For now, we use what we have: if last_accessed is this month, it contributes a day.
            date_filter_access = Q(last_accessed__gte=start_of_month)

        # 1. Text Content: 5 points
        text_count = UserContentProgress.objects.filter(
            user=user, 
            is_completed=True, 
            content__type='TEXT'
        ).filter(date_filter_progress).count()
        points += text_count * 5

        # 2. Quiz Content: 10 points
        # Using QuizSubmission for passed quizzes
        quiz_count = QuizSubmission.objects.filter(
            user=user, 
            passed=True
        ).filter(date_filter_quiz).count()
        points += quiz_count * 10

        # 3. Problems Content (easy, medium, hard): 10/20/30 points
        # Only count SOLVED problems. Avoid duplicates (same problem solved multiple times).
        # We need unique problem IDs.
        solved_submissions = ProblemSubmission.objects.filter(
            user=user, 
            status='SOLVED'
        ).filter(date_filter_submission).select_related('problem')
        
        # Deduplicate by problem ID
        unique_solved = {}
        for sub in solved_submissions:
            if sub.problem.id not in unique_solved:
                unique_solved[sub.problem.id] = sub.problem.difficulty

        for pid, difficulty in unique_solved.items():
            diff_upper = difficulty.upper()
            if diff_upper == 'EASY':
                points += 10
            elif diff_upper == 'MEDIUM':
                points += 20
            elif diff_upper == 'HARD':
                points += 30

        # 4. User Streak / Active Days: 5 points per day
        # Collect unique dates from submissions, completions, and last_accessed
        
        # Submissions
        sub_dates = ProblemSubmission.objects.filter(
            user=user
        ).filter(date_filter_submission).values_list('submitted_at__date', flat=True)
        
        # Completions
        comp_dates = UserContentProgress.objects.filter(
            user=user,
            is_completed=True
        ).filter(date_filter_progress).values_list('completed_at__date', flat=True)
        
        # Last Accessed (Only one date per content-user pair)
        acc_dates = UserContentProgress.objects.filter(
            user=user
        ).filter(date_filter_access).values_list('last_accessed__date', flat=True)
        
        unique_dates = set(sub_dates) | set(comp_dates) | set(acc_dates)
        # Filter None values just in case
        valid_dates = {d for d in unique_dates if d is not None}
        
        active_days = len(valid_dates)
        points += active_days * 5

        # --- Prepare Data ---
        leaderboard_data.append({
            'user': user,
            'username': user.username,
            'name': user.get_full_name() or user.username,
            'points': points,
            'avatar_url': f"https://i.pravatar.cc/150?u={user.id}", # Consistent avatar based on ID
            'rank': 0
        })

    # Sort users by points (Desc)
    leaderboard_data.sort(key=lambda x: x['points'], reverse=True)

    # Assign Ranks
    for i, data in enumerate(leaderboard_data):
        data['rank'] = i + 1

    # Return top 10
    return leaderboard_data[:10]

@trace_span
def leaderboard(request):
    logger.info(f"Leaderboard accessed by {request.user.username if request.user.is_authenticated else 'Guest'}")
    
    monthly_leaders = calculate_leaderboard_data('monthly')
    overall_leaders = calculate_leaderboard_data('overall')
    
    context = {
        'monthly_leaders': monthly_leaders,
        'overall_leaders': overall_leaders
    }
    return render(request, 'leaderboard.html', context)
