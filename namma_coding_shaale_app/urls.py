from django.urls import path
from . import views

urlpatterns = [
    path("",views.home,name="home"),

    path('login', views.login, name='login'),
    path('verify-otp', views.login, name='verify-otp'),  # Same view handles both
    path('resend-otp', views.resend_otp, name='resend-otp'),
    path('logout', views.logout, name='logout'),
    path('profile/<str:section>', views.profile_page, name='profile'),
    path('complete-profile/', views.complete_profile, name='complete_profile'),

    path("code-editor/<int:course_id>",views.code_editor,name="code-editor"),
    path("code-editor",views.code_editor_freemium,name="code-editor-freemium"),
    path("list-problems/<int:course_id>",views.list_problems,name="list-problems"),
    path("list-contents/<int:course_id>",views.list_content,name="list-contents"),
    path("problem-solver/<int:course_id>",views.problem_solver,name="problem-solver"),

    path("api/save-code",views.save_code,name="save-code"),
    path("api/save-quiz-data",views.save_quiz_data,name="save-quiz-data"),
    path('my-courses/', views.my_courses, name='my-courses'),
    path('course/<int:course_id>/', views.continue_course, name='continue-course'),
    path('content/<int:course_id>/<str:content_file_id>/', views.view_content, name='content'),

    path('auth-receiver', views.auth_receiver, name='auth_receiver'),

    path('checkout/<int:course_id>', views.checkout, name='checkout'),
    path('order/status', views.payment_status, name='payment_status'),
    path('verify/certificate', views.show_certificate, name='show_certificate'),

    # Blog URLs
    path('blog/', views.blog_list, name='blog_list'),
    path('blog/create/', views.blog_create, name='blog_create'),
    path('blog/<int:post_id>/', views.blog_detail, name='blog_detail'),
    path('blog/edit/<int:post_id>/', views.blog_update, name='blog_update'),
    path('blog/delete/<int:post_id>/', views.blog_delete, name='blog_delete'),
    path('my-blogs/', views.my_blogs, name='my_blogs'),


    path('terms-and-conditions', views.terms_and_conditions, name='terms_and_conditions'),
    path('privacy-policy', views.privacy_policy, name='privacy_policy'),
    path('refund-policy', views.refund_policy, name='refund_policy'),
    path('contact-us', views.contact_us, name='contact_us'),
    path('about-us', views.about_us, name='about_us'),

    path("catalog/list-problems/<int:course_id>", views.problems_catalog, name="problems-catalog"),
    path("catalog/list-courses", views.course_catalog, name="course-catalog"),
    
    path("email-sender", views.email_sender, name="email-sender")

    # Student Dashboard
    path("dashboard/<str:username>/", views.student_dashboard, name="student_dashboard"),
    path("dashboard/<str:username>/report/", views.student_report, name="student_report"),
]


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
