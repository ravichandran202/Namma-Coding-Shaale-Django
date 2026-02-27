from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseNotFound
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib import messages
from .models import Room, Contest, ContestContent, ContestSubmission
from django.contrib.auth.models import User
from namma_coding_shaale_app.models import Content, Problem
from django.utils import timezone
import json
import logging
from django.utils.dateparse import parse_datetime

logger = logging.getLogger(__name__)

def is_admin_or_staff(user):
    return user.is_authenticated and (user.is_staff or user.is_superuser)

@login_required
@user_passes_test(is_admin_or_staff)
def manage_rooms(request):
    """List and create rooms for admin/staff."""
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        if name and description:
            room = Room(name=name, description=description, created_by=request.user.id)
            room.save()
            messages.success(request, f"Room '{name}' created successfully.")
            return redirect('manage_rooms')
        else:
            messages.error(request, "Name and description are required.")

    rooms = Room.all()
    rooms.sort(key=lambda x: x.created_at, reverse=True)
    return render(request, 'rooms_app/manage_rooms.html', {'rooms': rooms})

@login_required
@user_passes_test(is_admin_or_staff)
def room_detail_admin(request, room_id):
    """Manage a specific room, including batch adding students."""
    room = Room.get(room_id)
    if not room:
        messages.error(request, "Room not found.")
        return redirect('manage_rooms')

    if request.method == 'POST':
        emails_text = request.POST.get('participant_emails', '')
        import re
        raw_emails = re.split(r'[,\n\r]+', emails_text)
        emails = [email.strip().lower() for email in raw_emails if email.strip()]

        added_count = 0
        failed_emails = []

        for email in emails:
            user_exists = User.objects.filter(email=email).exists()
            if user_exists:
                if email not in room.participants:
                    room.participants.append(email)
                    added_count += 1
            else:
                failed_emails.append(email)

        room.save()

        if added_count > 0:
            messages.success(request, f"Successfully added {added_count} participant(s).")
        if failed_emails:
            messages.warning(request, f"Failed to add {len(failed_emails)} participant(s). The following emails do not exist: {', '.join(failed_emails)}")

        return redirect('room_detail_admin', room_id=room.id)

    contests = Contest.filter(room_id=room.id)
    contests.sort(key=lambda x: x.created_at, reverse=True)

    context = {
        'room': room,
        'contests': contests,
        'participant_count': len(room.participants)
    }
    return render(request, 'rooms_app/room_detail_admin.html', context)


@login_required
@user_passes_test(is_admin_or_staff)
def create_contest(request, room_id):
    room = Room.get(room_id)
    if not room:
        messages.error(request, "Room not found.")
        return redirect('manage_rooms')

    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        start_time_str = request.POST.get('start_time')
        end_time_str = request.POST.get('end_time')

        if title and start_time_str and end_time_str:
            start_time = parse_datetime(start_time_str)
            end_time = parse_datetime(end_time_str)
            
            if start_time and end_time and end_time > start_time:
                contest = Contest(
                    room_id=room.id,
                    title=title,
                    description=description,
                    start_time=start_time,
                    end_time=end_time,
                    created_by=request.user.id
                )
                contest.save()
                messages.success(request, f"Contest '{title}' created successfully.")
                return redirect('room_detail_admin', room_id=room.id)
            else:
                messages.error(request, "Invalid dates. End time must be after start time.")
        else:
            messages.error(request, "Please fill all required fields.")
            
    return redirect('room_detail_admin', room_id=room.id)


@login_required
@user_passes_test(is_admin_or_staff)
def manage_contest(request, room_id, contest_id):
    room = Room.get(room_id)
    contest = Contest.get(contest_id)
    
    if not room or not contest or contest.room_id != room.id:
        messages.error(request, "Contest not found.")
        return redirect('manage_rooms')

    # Add existing Problem
    if request.method == 'POST' and 'add_problem' in request.POST:
        problem_id = request.POST.get('problem_id')
        if problem_id:
            try:
                problem = Content.objects.get(id=problem_id, type='PROBLEM')
                content_count = len(ContestContent.filter(contest_id=contest.id))
                cc = ContestContent(
                    contest_id=contest.id,
                    content_type='PROBLEM',
                    reference_id=str(problem.id),
                    sequence_number=content_count + 1
                )
                cc.save()
                messages.success(request, "Problem added to contest.")
            except Content.DoesNotExist:
                messages.error(request, "Problem not found.")
        return redirect('manage_contest', room_id=room.id, contest_id=contest.id)

    # Add existing Quiz
    if request.method == 'POST' and 'add_quiz' in request.POST:
        quiz_id = request.POST.get('quiz_id')
        if quiz_id:
            try:
                quiz = Content.objects.get(id=quiz_id, type='QUIZ')
                content_count = len(ContestContent.filter(contest_id=contest.id))
                cc = ContestContent(
                    contest_id=contest.id,
                    content_type='QUIZ',
                    reference_id=str(quiz.id),
                    sequence_number=content_count + 1
                )
                cc.save()
                messages.success(request, "Quiz added to contest.")
            except Content.DoesNotExist:
                messages.error(request, "Quiz not found.")
        return redirect('manage_contest', room_id=room.id, contest_id=contest.id)

    # Create new quiz and add
    if request.method == 'POST' and 'create_new_quiz' in request.POST:
        title = request.POST.get('quiz_title')
        quiz_data_str = request.POST.get('quiz_data')
        
        try:
            quiz_data = json.loads(quiz_data_str)
            # Create standard Content entry
            new_quiz_content = Content.objects.create(
                title=title,
                type='QUIZ',
                quiz_data=quiz_data,
                file_name=f"contest_quiz_{contest.id}_{timezone.now().timestamp()}"
            )
            
            content_count = len(ContestContent.filter(contest_id=contest.id))
            cc = ContestContent(
                contest_id=contest.id,
                content_type='QUIZ',
                reference_id=str(new_quiz_content.id),
                sequence_number=content_count + 1
            )
            cc.save()
            messages.success(request, f"New Quiz '{title}' created and added to contest.")
        except json.JSONDecodeError:
            messages.error(request, "Invalid JSON format for Quiz Data.")
        except Exception as e:
            messages.error(request, f"Error creating quiz: {str(e)}")
            
        return redirect('manage_contest', room_id=room.id, contest_id=contest.id)

    contest_contents = ContestContent.filter(contest_id=contest.id)
    contest_contents.sort(key=lambda x: x.sequence_number)
    
    resolved_contents = []
    for cc in contest_contents:
        try:
            actual_content = Content.objects.get(id=cc.reference_id)
            resolved_contents.append({
                'map_id': cc.id,
                'type': cc.content_type,
                'title': actual_content.title,
                'sequence': cc.sequence_number
            })
        except Content.DoesNotExist:
            continue

    available_problems = Content.objects.filter(type='PROBLEM').order_by('-created_at')
    available_quizzes = Content.objects.filter(type='QUIZ').order_by('-created_at')

    context = {
        'room': room,
        'contest': contest,
        'resolved_contents': resolved_contents,
        'available_problems': available_problems,
        'available_quizzes': available_quizzes
    }
    return render(request, 'rooms_app/manage_contest.html', context)

@login_required
@user_passes_test(is_admin_or_staff)
def contest_results_admin(request, room_id, contest_id):
    """Real-time results dashboard for a contest."""
    room = Room.get(room_id)
    contest = Contest.get(contest_id)
    
    if not room or not contest or contest.room_id != room.id:
        messages.error(request, "Contest not found.")
        return redirect('manage_rooms')

    # Get all submissions for this contest
    submissions = ContestSubmission.filter(contest_id=contest.id)
    
    # Leaderboard aggregation
    # Format: { 'email': {'problems_solved': count, 'quiz_score': total_score, 'points': points} }
    leaderboard = {}
    
    # Initialize all room participants in leaderboard to show even those with 0
    for email in room.participants:
        leaderboard[email] = {
            'email': email,
            'problems_solved': 0,
            'quiz_score': 0,
            'points': 0
        }

    for sub in submissions:
        email = sub.user_identifier
        if email not in leaderboard:
            # Submissions from someone outside the room (shouldn't happen, but just in case)
            leaderboard[email] = {'email': email, 'problems_solved': 0, 'quiz_score': 0, 'points': 0}
            
        if sub.type == 'PROBLEM':
            status = sub.result_data.get('status')
            if status == 'SOLVED':
                leaderboard[email]['problems_solved'] += 1
                leaderboard[email]['points'] += 10  # 10 pts per problem (example metric)
        elif sub.type == 'QUIZ':
            score = float(sub.result_data.get('score', 0))
            leaderboard[email]['quiz_score'] += score
            leaderboard[email]['points'] += (score / 10)  # Convert % to points (example)

    # Sort leaderboard by points descending
    sorted_leaderboard = sorted(leaderboard.values(), key=lambda x: x['points'], reverse=True)
    
    # Calculate contest-wide stats
    total_problems_solved = sum(u['problems_solved'] for u in sorted_leaderboard)
    active_participants = sum(1 for u in sorted_leaderboard if u['points'] > 0)
    
    context = {
        'room': room,
        'contest': contest,
        'leaderboard': sorted_leaderboard,
        'total_participants': len(room.participants),
        'active_participants': active_participants,
        'total_problems_solved': total_problems_solved,
        # Auto-refresh interval (milliseconds)
        'auto_refresh_ms': 15000 
    }
    
    return render(request, 'rooms_app/contest_results_admin.html', context)

# --- STUDENT VIEWS ---

@login_required
def room_detail_student(request, room_id):
    """View for students to see room details and available contests."""
    room = Room.get(room_id)
    if not room:
        messages.error(request, "Room not found.")
        return redirect('my-courses')

    # Enforce access control
    if request.user.email not in room.participants:
        messages.error(request, "You do not have access to this room.")
        return redirect('my-courses')

    contests = Contest.filter(room_id=room.id)
    contests.sort(key=lambda x: x.start_time, reverse=True)

    active_contests = [c for c in contests if c.is_active]
    past_contests = [c for c in contests if c.is_past]
    upcoming_contests = [c for c in contests if not c.is_active and not c.is_past]

    context = {
        'room': room,
        'active_contests': active_contests,
        'past_contests': past_contests,
        'upcoming_contests': upcoming_contests
    }
    return render(request, 'rooms_app/room_detail_student.html', context)

@login_required
def contest_detail_student(request, room_id, contest_id):
    """View for student to take a contest."""
    room = Room.get(room_id)
    contest = Contest.get(contest_id)
    
    if not room or not contest or contest.room_id != room.id:
        messages.error(request, "Contest not found.")
        return redirect('my-courses')

    if request.user.email not in room.participants:
        messages.error(request, "You do not have access to this room.")
        return redirect('my-courses')

    if not contest.is_active and not contest.is_past:
         messages.error(request, "This contest hasn't started yet.")
         return redirect('room_detail_student', room_id=room.id)

    # Get Assigned Content
    contest_contents = ContestContent.filter(contest_id=contest.id)
    contest_contents.sort(key=lambda x: x.sequence_number)
    
    # Get user submissions map to show status
    submissions = ContestSubmission.filter(contest_id=contest.id, user_identifier=request.user.email)
    sub_map = {sub.content_reference_id: sub for sub in submissions}

    resolved_items = []
    
    for cc in contest_contents:
        try:
            actual_content = Content.objects.get(id=cc.reference_id)
            from namma_coding_shaale_app.models import CourseContent
            cc_obj = CourseContent.objects.filter(content=actual_content).first()
            course_id = cc_obj.course.id if cc_obj else 102
            
            status = 'PENDING'
            score = None
            
            sub = sub_map.get(cc.reference_id)
            if sub:
                if cc.content_type == 'PROBLEM':
                    status = sub.result_data.get('status', 'UNSOLVED')
                elif cc.content_type == 'QUIZ':
                    status = 'COMPLETED'
                    score = sub.result_data.get('score', 0)
                    
            item = {
                'map_id': cc.id,
                'content_id': actual_content.id,
                'file_name': actual_content.file_name,
                'type': cc.content_type,
                'title': actual_content.title,
                'sequence': cc.sequence_number,
                'status': status,
                'score': score,
                'course_id': course_id
            }
            if cc.content_type == 'PROBLEM' and actual_content.problem:
                item['difficulty'] = actual_content.problem.get_difficulty_display()
                
            resolved_items.append(item)
        except Content.DoesNotExist:
            continue


    leaderboard = None
    if contest.is_past:
        all_submissions = ContestSubmission.filter(contest_id=contest.id)
        lb_dict = {}
        for email in room.participants:
            lb_dict[email] = {'email': email, 'problems_solved': 0, 'quiz_score': 0, 'points': 0}
            
        for s in all_submissions:
            email = s.user_identifier
            if email not in lb_dict:
                lb_dict[email] = {'email': email, 'problems_solved': 0, 'quiz_score': 0, 'points': 0}
                
            if s.type == 'PROBLEM':
                if s.result_data.get('status') == 'SOLVED':
                    lb_dict[email]['problems_solved'] += 1
                    lb_dict[email]['points'] += 10
            elif s.type == 'QUIZ':
                s_score = float(s.result_data.get('score', 0))
                lb_dict[email]['quiz_score'] += s_score
                lb_dict[email]['points'] += (s_score / 10)
                
        leaderboard = sorted(lb_dict.values(), key=lambda x: x['points'], reverse=True)

    context = {
        'room': room,
        'contest': contest,
        'content_items': resolved_items,
        'is_active': contest.is_active,
        'leaderboard': leaderboard
    }
    return render(request, 'rooms_app/contest_detail_student.html', context)

@login_required
def contest_problem_solver(request, room_id, contest_id, content_id):
    room = Room.get(room_id)
    contest = Contest.get(contest_id)
    
    if not room or not contest or request.user.email not in room.participants:
        messages.error(request, "Access denied.")
        return redirect('my-courses')
        
    try:
        content = Content.objects.get(id=content_id)
        problem = content.problem
    except Content.DoesNotExist:
        return HttpResponseNotFound("Problem not found")

    saved_code = problem.starter_code or ""
    status = 'UNSOLVED'
    submission_id = None
    
    submissions = ContestSubmission.filter(
        contest_id=contest_id, 
        user_identifier=request.user.email,
        content_reference_id=str(content_id)
    )
    if submissions:
        sub = sorted(submissions, key=lambda x: x.submitted_at, reverse=True)[0]
        saved_code = sub.result_data.get('code', saved_code)
        status = sub.result_data.get('status', status)
        submission_id = sub.id

    context = {
        "problem": problem,
        "saved_code": saved_code,
        "problem_id": problem.file_name,
        "submission_id": submission_id,
        "is_solved": str(status == 'SOLVED'),
        "room_id": room_id,
        "contest_id": contest_id,
        "content_id": content_id,
        "course_id": 102 
    }
    
    return render(request, "rooms_app/contest_problem_solver.html", context)


@login_required
def contest_quiz_view(request, room_id, contest_id, content_id):
    room = Room.get(room_id)
    contest = Contest.get(contest_id)
    
    if not room or not contest or request.user.email not in room.participants:
        messages.error(request, "Access denied.")
        return redirect('my-courses')
        
    try:
        content = Content.objects.get(id=content_id)
    except Content.DoesNotExist:
        return HttpResponseNotFound("Quiz not found")

    submissions = ContestSubmission.filter(
        contest_id=contest_id,
        user_identifier=request.user.email,
        content_reference_id=str(content_id)
    )
    
    if submissions:
        sub = sorted(submissions, key=lambda x: x.submitted_at, reverse=True)[0]
        quiz_score = sub.result_data.get('score', 0)
        quiz_passed = sub.result_data.get('passed', False)
        quiz_correct_answer_count = sub.result_data.get('correct_answers', 0)
        quiz_attempt = sub.result_data.get('attempt_number', 1)
    else:
        quiz_score = 0
        quiz_passed = False
        quiz_correct_answer_count = 0
        quiz_attempt = 0
        
    context = {
        'content': content,
        'quiz_data': json.dumps(content.quiz_data),
        'quiz_score': quiz_score,
        'quiz_passed': quiz_passed,
        'quiz_correct_answer_count': quiz_correct_answer_count,
        'quiz_attempt': quiz_attempt,
        'room_id': room_id,
        'contest_id': contest_id,
        'course_id': 102
    }
    
    return render(request, "rooms_app/contest_quiz_view.html", context)


@csrf_exempt
@api_view(['POST', 'OPTIONS'])
@permission_classes([AllowAny])
def save_contest_code(request):
    if request.method == 'OPTIONS':
        return Response()
    
    try:
        data = request.data
        code = data['code']
        failed_count = int(data.get('failed_count', 0))
        room_id = data.get('room_id')
        contest_id = data.get('contest_id')
        content_id = data.get('content_id')
        
        status = 'SOLVED' if failed_count == 0 else 'ATTEMPTED'
        
        submissions = ContestSubmission.filter(
            contest_id=contest_id,
            user_identifier=request.user.email,
            content_reference_id=str(content_id)
        )
        if submissions:
            sub = sorted(submissions, key=lambda x: x.submitted_at, reverse=True)[0]
            if sub.result_data.get('status') == 'SOLVED' and status != 'SOLVED':
                sub.result_data['code'] = code
                sub.result_data['execution_time'] = data.get('execution_time', sub.result_data.get('execution_time'))
            else:
                sub.result_data['code'] = code
                sub.result_data['status'] = status
                sub.result_data['failed_count'] = failed_count
                sub.result_data['execution_time'] = data.get('execution_time')
        else:
            sub = ContestSubmission(
                contest_id=contest_id,
                user_identifier=request.user.email,
                type_str='PROBLEM',
                content_reference_id=str(content_id),
                result_data={
                    'code': code,
                    'status': status,
                    'failed_count': failed_count,
                    'execution_time': data.get('execution_time')
                }
            )
        
        sub.submitted_at = timezone.now()
        sub.save()
        
        return Response({
            "message": "Data received successfully",
            "your_data": {
                "code": code,
                "failed_count": failed_count,
                "submission_id": sub.id,
                "status": status
            }
        }, status=200)
    except Exception as e:
        return Response({"error": str(e)}, status=500)


@csrf_exempt
@api_view(['POST', 'OPTIONS'])
@permission_classes([AllowAny])
def save_contest_quiz_data(request):
    if request.method == 'OPTIONS':
        return Response()
        
    try:
        quiz_data = request.data.get('quiz_data', [])
        content_id = request.data.get('content_id')
        is_passed = request.data.get('is_passed', False)
        room_id = request.data.get('room_id')
        contest_id = request.data.get('contest_id')
        
        correct_answers = sum(1 for q in quiz_data if q.get('isCorrect'))
        total_questions = len(quiz_data)
        score = (correct_answers / total_questions) * 100 if total_questions > 0 else 0
        
        submissions = ContestSubmission.filter(
            contest_id=contest_id,
            user_identifier=request.user.email,
            content_reference_id=str(content_id)
        )
        
        if submissions:
            sub = sorted(submissions, key=lambda x: x.submitted_at, reverse=True)[0]
            prev_score = sub.result_data.get('score', 0)
            attempt_number = sub.result_data.get('attempt_number', 1) + 1
            
            if score >= prev_score:
                sub.result_data['score'] = score
                sub.result_data['passed'] = is_passed
                sub.result_data['correct_answers'] = correct_answers
                sub.result_data['quiz_data'] = quiz_data
                
            sub.result_data['attempt_number'] = attempt_number
        else:
            sub = ContestSubmission(
                contest_id=contest_id,
                user_identifier=request.user.email,
                type_str='QUIZ',
                content_reference_id=str(content_id),
                result_data={
                    'score': score,
                    'passed': is_passed,
                    'correct_answers': correct_answers,
                    'attempt_number': 1,
                    'quiz_data': quiz_data
                }
            )
            
        sub.submitted_at = timezone.now()
        sub.save()
            
        return Response({"message": "Contest quiz data saved successfully"}, status=200)
    except Exception as e:
        return Response({"error": str(e)}, status=400)

@login_required
def join_room(request):
    if request.method == 'POST':
        room_id = request.POST.get('room_id', '').strip()
        if not room_id:
            messages.error(request, 'Please enter a valid Room ID.')
            return redirect('my-courses')
            
        try:
            room = Room.get(room_id)
            if not room:
                messages.error(request, 'Room not found.')
                return redirect('my-courses')
            
            # Use participant emails since that's what's checked elsewhere
            user_email = request.user.email
            if user_email not in room.participants:
                room.participants.append(user_email)
                room.save()
                messages.success(request, f'Successfully joined room: {room.name}')
            else:
                messages.info(request, f'You are already in room: {room.name}')
                
            return redirect('room_detail_student', room_id=room.id)
            
        except Exception as e:
            messages.error(request, f'Error joining room: {str(e)}')
            return redirect('my-courses')
            
    return redirect('my-courses')
