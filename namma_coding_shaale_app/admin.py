from django.contrib import admin
from .models import OTP, Course, Problem, Content, CourseContent, UserCourse, ProblemSubmission, UserContentProgress, QuizSubmission

admin.site.register(OTP)
admin.site.register(Course)
admin.site.register(Problem)
admin.site.register(Content)
admin.site.register(CourseContent)
admin.site.register(UserCourse)
admin.site.register(ProblemSubmission)
admin.site.register(UserContentProgress)
admin.site.register(QuizSubmission)