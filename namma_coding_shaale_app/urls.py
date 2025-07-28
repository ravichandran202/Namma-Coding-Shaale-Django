from django.urls import path
from . import views

urlpatterns = [
    path("",views.home,name="home"),

    path('login', views.login, name='login'),
    path('verify-otp', views.login, name='verify-otp'),  # Same view handles both
    path('resend-otp', views.resend_otp, name='resend-otp'),
    path('logout', views.logout, name='logout'),

    path("code-editor",views.code_editor,name="code-editor"),
    path("list-problems/<int:course_id>",views.list_problems,name="list-problems"),
    path("problem-solver/<int:course_id>",views.problem_solver,name="problem-solver"),

    path("api/save-code",views.save_code,name="save-code"),
    path('my-courses/', views.my_courses, name='my-courses'),
    path('course/<int:course_id>/', views.continue_course, name='continue-course'),
    path('content/<int:course_id>/<str:content_file_id>/', views.view_content, name='content'),
]
