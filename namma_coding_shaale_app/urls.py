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
]
