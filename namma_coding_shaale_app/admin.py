from django.contrib import admin
from .models import OTP, Course, Problem, Content, CourseContent, UserCourse, ProblemSubmission, UserContentProgress, QuizSubmission

from django.contrib import admin
from .models import *

@admin.register(OTP)
class OTPAdmin(admin.ModelAdmin):
    list_display = ['user', 'code', 'created_at', 'expires_at', 'is_valid']
    list_filter = ['created_at', 'expires_at']
    search_fields = ['user__username', 'user__email', 'code']
    readonly_fields = ['created_at']

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['name', 'language', 'is_premium', 'base_price', 'created_at']
    list_filter = ['language', 'is_premium', 'created_at']
    search_fields = ['name', 'description']
    readonly_fields = ['created_at', 'updated_at']

@admin.register(Problem)
class ProblemAdmin(admin.ModelAdmin):
    list_display = ['title', 'difficulty', 'language', 'created_at']
    list_filter = ['difficulty', 'language', 'created_at']
    search_fields = ['title', 'description']
    readonly_fields = ['created_at', 'updated_at']

@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ['title', 'type', 'file_name', 'created_at']
    list_filter = ['type', 'created_at']
    search_fields = ['title', 'content_text']
    readonly_fields = ['created_at', 'updated_at']

@admin.register(CourseContent)
class CourseContentAdmin(admin.ModelAdmin):
    list_display = ['course', 'content', 'section_title', 'sequence_number', 'is_unlocked_by_default', 'unlocks_next']
    list_filter = ['course', 'is_unlocked_by_default', 'unlocks_next']
    search_fields = ['course__name', 'section_title', 'content__title']
    readonly_fields = ['created_at']

@admin.register(UserCourse)
class UserCourseAdmin(admin.ModelAdmin):
    list_display = ['user', 'course', 'enrollment_date', 'payment_status', 'fees_paid', 'current_content']
    list_filter = ['payment_status', 'enrollment_date', 'completion_date']
    search_fields = ['user__username', 'course__name']
    readonly_fields = ['enrollment_date']

@admin.register(ProblemSubmission)
class ProblemSubmissionAdmin(admin.ModelAdmin):
    list_display = ['user', 'problem', 'course', 'status', 'execution_time', 'submitted_at']
    list_filter = ['status', 'submitted_at', 'course']
    search_fields = ['user__username', 'problem__title']
    readonly_fields = ['submitted_at', 'updated_at']

@admin.register(UserContentProgress)
class UserContentProgressAdmin(admin.ModelAdmin):
    list_display = ['user', 'course', 'content', 'is_completed', 'is_locked', 'last_accessed']
    list_filter = ['is_completed', 'is_locked', 'last_accessed']
    search_fields = ['user__username', 'course__name', 'content__title']
    readonly_fields = ['last_accessed']

@admin.register(QuizSubmission)
class QuizSubmissionAdmin(admin.ModelAdmin):
    list_display = ['user', 'content', 'course', 'score', 'passed', 'attempt_number', 'completed_at']
    list_filter = ['passed', 'attempt_number', 'completed_at', 'course']
    search_fields = ['user__username', 'content__title']
    readonly_fields = ['started_at', 'completed_at']