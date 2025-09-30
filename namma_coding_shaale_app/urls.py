from django.urls import path
from . import views

urlpatterns = [
    path("",views.home,name="home"),

    path('login', views.login, name='login'),
    path('verify-otp', views.login, name='verify-otp'),  # Same view handles both
    path('resend-otp', views.resend_otp, name='resend-otp'),
    path('logout', views.logout, name='logout'),

    path("code-editor/<int:course_id>",views.code_editor,name="code-editor"),
    path("code-editor",views.code_editor_freemium,name="code-editor-freemium"),
    path("list-problems/<int:course_id>",views.list_problems,name="list-problems"),
    path("problem-solver/<int:course_id>",views.problem_solver,name="problem-solver"),

    path("api/save-code",views.save_code,name="save-code"),
    path("api/save-quiz-data",views.save_quiz_data,name="save-quiz-data"),
    path('my-courses/', views.my_courses, name='my-courses'),
    path('course/<int:course_id>/', views.continue_course, name='continue-course'),
    path('content/<int:course_id>/<str:content_file_id>/', views.view_content, name='content'),

    path('auth-receiver', views.auth_receiver, name='auth_receiver'),

    path('checkout', views.checkout, name='checkout'),

    path('terms-and-conditions', views.terms_and_conditions, name='terms_and_conditions'),
    path('privacy-policy', views.privacy_policy, name='privacy_policy'),
    path('refund-policy', views.refund_policy, name='refund_policy'),
    path('contact-us', views.contact_us, name='contact_us'),
]
