from django.http import Http404, JsonResponse, HttpResponse, HttpResponseNotFound
from django.urls import reverse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
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
from .models import OTP, CourseContent, UserContentProgress, UserCourse, ProblemSubmission, Content, Course, Problem, QuizSubmission
import logging
import json
import ast
from datetime import datetime
import requests

from django.db import transaction
import django.db.models as models
from django.db.models import Case, When, Value, BooleanField, Count, Q
from django.db.models.functions import Concat
from django.db.models import F

credentials = getattr(settings, 'CREDENTIALS', {})
# Get an instance of a logger
logger = logging.getLogger(__name__)

def generate_otp():
    return ''.join(random.choices(string.digits, k=6))

def send_otp_email(user, otp_code):
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
        return True
    except Exception as e:
        print(f"Failed to send OTP email: {str(e)}")
        return False

def send_course_enrollment_email(user, course, user_course, request):
    """Helper function to send course enrollment success email"""
    subject = f"Successfully Enrolled in {course.name} | Namma Coding Shaale"
    
    context = {
        'name': user.get_full_name() or user.username,
        'course_name': course.name,
        'purchase_date': datetime.now().strftime("%B %d, %Y at %I:%M %p"),
        'order_id': f"NCS-{user_course.id}-{datetime.now().strftime('%Y%m%d')}",
        'my_courses_link': request.build_absolute_uri('/my-courses/')
    }
    
    html_message = render_to_string('course_enrollment_email.html', context)
    
    send_mail(
        subject=subject,
        message=strip_tags(html_message),
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[user.email],
        html_message=html_message,
        fail_silently=False
    )

@csrf_exempt
def auth_receiver(request):
    """
    Google calls this URL after the user has signed in with their Google account.
    """
    if request.method != 'POST':
        return HttpResponse('Method not allowed', status=405)
    
    token = request.POST.get('credential')
    
    if not token:
        return HttpResponse('No credential provided', status=400)

    try:
        # Verify the Google token
        user_data = id_token.verify_oauth2_token(
            token, 
            google_requests.Request(), 
            os.environ.get('GOOGLE_OAUTH_CLIENT_ID')
        )
    except ValueError as e:
        print(f"Token verification failed: {e}")
        return HttpResponse('Invalid token', status=403)

    # Extract user data
    google_id = user_data['sub']
    email = user_data['email']
    first_name = user_data.get('given_name', '')
    last_name = user_data.get('family_name', '')
    email_verified = user_data.get('email_verified', False)

    if not email_verified:
        return HttpResponse('Email not verified', status=403)

    try:
        # SIMPLE APPROACH: Use email as the identifier
        # Try to find user by email (Google ensures email is unique and verified)
        try:
            user = User.objects.get(email=email)
            # Update user info if needed
            user.first_name = first_name
            user.last_name = last_name
            user.save()
            
        except User.DoesNotExist:
            # Create a new user
            # Use email as username (or generate a username from email)
            username = email
            
            # Ensure username is unique
            if User.objects.filter(username=username).exists():
                username = email
            
            user = User.objects.create_user(
                username=username,
                email=email,
                first_name=first_name,
                last_name=last_name,
                password="1234567890"  # No password for Google auth
            )
            user.save()
        
        # Log the user in directly (no need for authenticate() since we verified Google token)
        auth_login(request, user)
        
        # Store minimal user data in session if needed
        request.session['user_email'] = email
        request.session['user_name'] = f"{first_name} {last_name}".strip()
        
        return redirect('my-courses')  # Redirect to your courses page
        
    except Exception as e:
        print(f"Error during authentication: {e}")
        return HttpResponse('Authentication error', status=500)


def login(request):
    if request.method == HTTPMethod.POST:

        #handle onboarding flow
        if "first-name" and "last-name" in request.POST and request.user.is_authenticated:
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
                messages.error(request, 'OTP session expired. Please try again.')
                return redirect('login')
            
            otp_code = request.POST['otp']
            
            try:
                user = User.objects.get(email=email)
                otp = OTP.objects.filter(user=user, code=otp_code).latest('created_at')
                
                if otp.is_valid():
                    auth_login(request, user)
                    # Clean up
                    OTP.objects.filter(user=user).delete()
                    if 'otp_email' in request.session:
                        del request.session['otp_email']
                    
                    #check if First and Last name exists
                    if request.user.first_name == "" or request.user.last_name == "":
                        return render(request, "onboarding_form.html")
                    return redirect("my-courses")
                else:
                    messages.error(request, 'OTP has expired. Please request a new one.')
                    return redirect('login')
            except (User.DoesNotExist, OTP.DoesNotExist):
                messages.error(request, 'Invalid OTP. Please try again.')
                return render(request, "verify_otp.html", {'email': email})
        
        # Initial email submission
        email = request.POST['email'].lower()
        
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
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
            messages.error(request, 'Failed to send OTP. Please try again.')
            return redirect('login')

    return render(request, "login.html")



def resend_otp(request):
    if request.method == HTTPMethod.POST:
        email = request.session.get('otp_email')
        if not email:
            messages.error(request, 'Session expired. Please try logging in again.')
            return redirect('login')
        
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
            messages.error(request, 'User not found. Please try again.')
            return redirect('login')
    
    return redirect('login')


@login_required(login_url="login")
def logout(request):
    auth.logout(request)
    return redirect('login')

def home(request):
    print("Home Page Called")
    return render(request,"index.html")

def code_editor_freemium(request):
    print("Code Editor Freemium Page Called")
    return render(request,"code-editor-freemium.html")


@login_required(login_url="login")
def code_editor(request, course_id):
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

@login_required(login_url="login")
def list_problems(request, course_id):
    if not UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
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
            user=request.user, problem=problem_obj
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

@login_required(login_url="login")
def checkout(request, course_id):
    if UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
            return redirect("my-courses")
    
    course = get_object_or_404(Course, id=course_id)
    phonepe_client = setup_phonepe_client()
    payment_link, ui_redirect_url = get_checkout_page_url(request, phonepe_client, course)

    context = {
        "payment_link" : payment_link,
        "course" : course,
        "selling_price" : int(course.base_price) + 1000,
        "platform_fees" : 0,
        "total_price" : int(course.base_price),
        "ui_redirect_url" : ui_redirect_url
    }

    return render(request, "checkout.html", context=context)

def payment_status(request):
    merchant_order_id = request.GET.get('txn_id')

    #TODO : verify the txn_id from DB

    phonepe_client = setup_phonepe_client()
    order_status = get_order_status(request, phonepe_client, merchant_order_id)

    if order_status.state == "COMPLETED":
        course_id = order_status.meta_info.udf2
        if not UserCourse.objects.filter(user=request.user, course_id=course_id).exists():
            enroll_course(request, course_id)


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

def terms_and_conditions(request):
    return render(request, "terms-and-conditions.html")

def privacy_policy(request):
    return render(request, "privacy-policy.html")

def refund_policy(request):
    return render(request, "refund-policy.html")

def contact_us(request):
    return render(request, "contact-us.html")

@login_required(login_url="login")
def problem_solver(request, course_id):
    problem_file_id = request.GET.get('id')
    content_id = request.GET.get('content_id')  # Optional
    course_id = course_id    # Optional
    
    try:
        problem = Problem.objects.get(file_name=problem_file_id)
    except Problem.DoesNotExist:
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
        "submission_id": submission.id  # Include submission ID for your API
    }
    
    return render(request, "problem-solver.html", context)



@login_required
def my_courses(request):
    # Get all enrolled courses with progress annotations
    enrolled_courses = UserCourse.objects.filter(user=request.user).select_related('course')
    
    #if a user is new or not having any course - enroll it to fremium course and send a Mail
    if len(enrolled_courses) == 0:
        FREEMUIUM_COURSE_ID = 1
        enroll_course(request, FREEMUIUM_COURSE_ID)

        # since newly created, get course data
        enrolled_courses = UserCourse.objects.filter(user=request.user).select_related('course')

    courses_data = []
    for user_course in enrolled_courses:
        course = user_course.course
        
        # Get counts in single queries
        total_contents = CourseContent.objects.filter(course=course).count()
        completed_contents = UserContentProgress.objects.filter(
            user=request.user,
            course=course,
            is_completed=True
        ).count()

        
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
        })
    
    return render(request, 'my_courses.html', {'courses': courses_data})

@login_required
def continue_course(request, course_id):
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
        content__usercontentprogress__is_completed=True
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
    messages.info(request, "This course doesn't have any content yet.")
    return redirect('my-courses')

from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .models import UserContentProgress, Content, Course, UserCourse

@login_required
def view_content(request, course_id, content_file_id):
    with transaction.atomic():
        # Get course and content objects
        course = get_object_or_404(Course, id=course_id)
        content = get_object_or_404(Content, file_name=content_file_id)

        # Check if user is enrolled in the course
        if not UserCourse.objects.filter(user=request.user, course=course).exists():
            return render(request, "index.html")

        roadmap = get_user_roadmap_html(user_id=request.user.id, course_id=course_id)
        
        # Verify content belongs to course
        course_content = get_object_or_404(
            CourseContent, 
            course=course, 
            content=content
        )

        
        # Get or create user course progress
        user_course, _ = UserCourse.objects.get_or_create(
            user=request.user,
            course=course,
            defaults={'current_content': content}
        )

        #update current content
        user_course.current_content = content
        user_course.save()
        
        # Get or create content progress
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
            progress.is_completed = True
            progress.completed_at = timezone.now()
            progress.save()
            
            # Get next content in sequence
            next_content = CourseContent.objects.filter(
                course=course,
                sequence_number__gt=course_content.sequence_number
            ).order_by('sequence_number').first()
            
            if next_content:
                # Update user's current content
                user_course.current_content = next_content.content
                user_course.save()
                
                # Unlock the next content
                UserContentProgress.objects.update_or_create(
                    user=request.user,
                    course=course,
                    content=next_content.content,
                    defaults={'is_locked': False}
                )
                
                return redirect(reverse('content', kwargs={
                    'course_id': course.id,
                    'content_file_id': next_content.content.file_name 
                }))
            
            # If no next content, just stay on current page but mark as completed
            return redirect(reverse('content', kwargs={
                'course_id': course.id,
                'content_file_id': content.file_name 
            }))
        
        # Handle quiz submission
        # elif 'quiz_submission' in request.POST:
        #     try:
        #         quiz_data = json.loads(request.POST.get('quiz_data'))
        #         user_answers = json.loads(request.POST.get('user_answers'))
        #         start_time = request.POST.get('start_time')
                
        #         # Calculate time taken
        #         start_datetime = timezone.datetime.fromisoformat(start_time)
        #         time_taken = (timezone.now() - start_datetime).seconds
                
        #         # Calculate score
        #         correct_count = 0
        #         for question in quiz_data['questions']:
        #             user_answer = user_answers.get(str(question['id']))
                    
        #             if question['type'] == 'multiple-choice':
        #                 correct = user_answer == question['correctAnswer']
        #             elif question['type'] == 'single-choice':
        #                 correct = set(user_answer or []) == set(question['correctAnswers'])
        #             else:  # text or code questions
        #                 correct_answers = question.get('correctAnswers', [question['correctAnswer']])
        #                 correct = any(user_answer.lower() == ans.lower() for ans in correct_answers)
                    
        #             if correct:
        #                 correct_count += 1
                
        #         total_questions = len(quiz_data['questions'])
        #         score = round((correct_count / total_questions) * 100, 2)
        #         passed = score >= quiz_data.get('passingScore', 70)
                
        #         # Get attempt number
        #         attempt_number = QuizSubmission.objects.filter(
        #             user=request.user,
        #             content=content
        #         ).count() + 1
                
        #         # Save quiz submission
        #         QuizSubmission.objects.create(
        #             user=request.user,
        #             content=content,
        #             course=course,
        #             quiz_data=quiz_data,
        #             user_answers=user_answers,
        #             score=score,
        #             passed=passed,
        #             correct_answers=correct_count,
        #             total_questions=total_questions,
        #             started_at=start_datetime,
        #             completed_at=timezone.now(),
        #             time_taken=time_taken,
        #             attempt_number=attempt_number
        #         )
                
        #         # Mark content as completed if passed
        #         if passed:
        #             progress.is_completed = True
        #             progress.completed_at = timezone.now()
        #             progress.save()
                
            
            # except Exception as e:
            #     logger.error(f"Error saving quiz submission: {str(e)}")
            #     messages.error(request, "Error saving quiz results. Please try again.")
            #     return redirect(reverse('content', kwargs={
            #         'course_id': course.id,
            #         'content_file_id': content.file_name 
            #     }))
        
        # Prepare context
        context = {
            'course': course,
            'content': content,
            'user_course': user_course,
            'progress': progress,
            'is_completed': progress.is_completed,
            'content_file_id': content.file_name,
            'roadmap': roadmap,
            'course_id': course_id
        }

        if content.type.lower() == "quiz":
            # Add previous quiz attempts to context if any exist
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
            context['quiz_data'] = json.dumps(quiz_submission.quiz_data)
            context['quiz_score'] = quiz_submission.score
            context['quiz_passed'] =  quiz_submission.passed
            context['quiz_correct_answer_count'] =  quiz_submission.correct_answers
            context['quiz_attempt'] =  quiz_submission.attempt_number

            print(context['quiz_submission'] )
            print(context['quiz_data'])
            print(context['quiz_score'] )
            print(context['quiz_passed'])
            print(context['quiz_correct_answer_count'])
            print(context['quiz_attempt'])

            return render(request, "view_quiz_content.html", context)

        if content.type.lower() == "problem":
            return render(request, "view_problem_content.html", context)
    
        return render(request, "view_content.html", context)
    

'''
   HANDLERS
'''
def get_user_roadmap_html(user_id, course_id):
    # Get all user progress records in one query
    user_progress = {
        up.content_id: up 
        for up in UserContentProgress.objects.filter(
            user_id=user_id,
            course_id=course_id
        ).select_related('content')
    }

    # Get all course contents
    course_contents = (
        CourseContent.objects
        .filter(course_id=course_id)
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
    
    return result



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
        
        problem = Problem.objects.filter(file_name=problem_file_id).first()
        if not problem:
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
        print(f"Missing key in request data: {str(e)}")
        return Response(
            {"error": f"Missing required field: {str(e)}"},
            status=400
        )
    except Exception as e:
        print(f"Error in save_code: {str(e)}")
        return Response(
            {"error": str(e)},
            status=500
        )


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

            # Process your quiz_data here...
            print("Received:", quiz_data)

            return JsonResponse({"status": "success", "message": "Quiz data saved successfully"})
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    return JsonResponse({"error": "Only POST method allowed"}, status=405)

def generate_password(length=8):
    alphabet = string.ascii_letters + string.digits  # ABC...XYZabc...xyz012...789
    return ''.join(secrets.choice(alphabet) for _ in range(length))


def enroll_course(request, course_id):
    # Get the course or return 404 if not found
    course = get_object_or_404(Course, id=course_id)
    user = request.user
    
    # Check if user is already enrolled
    if UserCourse.objects.filter(user=user, course=course).exists():
        messages.warning(request, 'You are already enrolled in this course!')
        return 
    
    try:
        # Create the UserCourse record
        user_course = UserCourse.objects.create(
            user=user,
            course=course,
            fees_paid=0 if not course.is_premium else course.base_price,
            payment_status='PAID' if not course.is_premium else 'PENDING'
        )
        
        # Get all course contents ordered by sequence number
        course_contents = CourseContent.objects.filter(course=course).order_by('sequence_number')
        
        # Create UserContentProgress records for each content
        for index, course_content in enumerate(course_contents):
            UserContentProgress.objects.create(
                user=user,
                course=course,
                content=course_content.content,
                is_locked=not (index == 0 and course_content.is_unlocked_by_default)
            )
        
        # Set the first content as current if available
        if course_contents.exists():
            first_content = course_contents.first().content
            user_course.current_content = first_content
            user_course.save()
            
            # Unlock the first content if it's locked (override the default)
            UserContentProgress.objects.filter(
                user=user,
                course=course,
                content=first_content
            ).update(is_locked=False)
        
        messages.success(request, f'Successfully enrolled in {course.name}!')

        # Send enrollment email
        # send_course_enrollment_email(user, course, user_course, request)

        return 
    
    except Exception as e:
        messages.error(request, f'Error enrolling in course: {str(e)}')
        return 


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


def get_checkout_page_url(request, client, course):
    unique_order_id = str(generate_txn_id())
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

def get_order_status(request, client, merchant_order_id):
    response = client.get_order_status(merchant_order_id, details=False)
    return response