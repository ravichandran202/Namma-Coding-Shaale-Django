from django.http import Http404, JsonResponse, HttpResponse, HttpResponseNotFound
from django.urls import reverse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

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
from .models import OTP, CourseContent, UserContentProgress, UserCourse, ProblemSubmission, Content, Course, Problem
import logging
import json


from django.db import transaction
import django.db.models as models
from django.db.models import Case, When, Value, BooleanField, Count, Q
from django.db.models.functions import Concat
from django.db.models import F



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



def login(request):
    if request.method == HTTPMethod.POST:
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
                    return redirect("home")
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
    if request.user.is_authenticated:
        return redirect("my-courses")
    return render(request,"index.html")

@login_required(login_url="login")
def code_editor(request):
    return render(request, "code-editor.html")

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
        
        # Prepare context
        context = {
            'course': course,
            'content': content,
            'user_course': user_course,
            'progress': progress,
            'is_completed': progress.is_completed,
            'content_file_id': content.file_name,
            'roadmap':roadmap,
            'course_id' : course_id
        }

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

def generate_password(length=8):
    alphabet = string.ascii_letters + string.digits  # ABC...XYZabc...xyz012...789
    return ''.join(secrets.choice(alphabet) for _ in range(length))
