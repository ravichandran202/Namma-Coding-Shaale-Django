from django.urls import path
from . import views

urlpatterns = [
    path('manage/', views.manage_rooms, name='manage_rooms'),
    path('join/', views.join_room, name='join_room'),
    
    # Contest Submission APIs
    path('api/save-contest-code', views.save_contest_code, name='save_contest_code'),
    path('api/save-contest-quiz', views.save_contest_quiz_data, name='save_contest_quiz_data'),

    path('<str:room_id>/', views.room_detail_admin, name='room_detail_admin'),
    path('<str:room_id>/contest/create/', views.create_contest, name='create_contest'),
    path('<str:room_id>/contest/<str:contest_id>/manage/', views.manage_contest, name='manage_contest'),
    path('<str:room_id>/contest/<str:contest_id>/results/', views.contest_results_admin, name='contest_results_admin'),
    path('<str:room_id>/student/', views.room_detail_student, name='room_detail_student'),
    path('<str:room_id>/student/overview/', views.room_overview_student, name='room_overview_student'),
    path('<str:room_id>/contest/<str:contest_id>/', views.contest_detail_student, name='contest_detail_student'),
    
    # Contest Execution Views
    path('<str:room_id>/contest/<str:contest_id>/problem/<str:content_id>/', views.contest_problem_solver, name='contest_problem_solver'),
    path('<str:room_id>/contest/<str:contest_id>/quiz/<str:content_id>/', views.contest_quiz_view, name='contest_quiz_view'),
]