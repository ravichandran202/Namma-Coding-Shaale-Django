from django.db import models
from django.contrib.auth.models import User
from datetime import timedelta
from django.utils import timezone
import random
import string
import json

class OTP(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    def save(self, *args, **kwargs):
        if not self.code:
            self.code = ''.join(random.choices(string.digits, k=6))
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(minutes=2)
        super().save(*args, **kwargs)

    def is_valid(self):
        return timezone.now() < self.expires_at

    def __str__(self):
        return f"OTP for {self.user.email} (expires {self.expires_at})"
    

class Course(models.Model):
    CONTENT_LANGUAGE_CHOICES = [
        ('PYTHON', 'python'),
        ('JAVASCRIPT', 'javascript'),
        ('JAVA', 'java'),
        ('CPP', 'cpp'),
    ]
    
    name = models.CharField(max_length=100)
    description = models.TextField()
    language = models.CharField(max_length=20, choices=CONTENT_LANGUAGE_CHOICES)
    is_premium = models.BooleanField(default=False)
    base_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.name} ({self.get_language_display()})"

class Batch(models.Model):
    """
    Represents a specific cohort/batch for a course.
    Used to calculate drip content unlocking based on start_date.
    """
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='batches')
    name = models.CharField(max_length=100) # e.g., "January 2026 Batch"
    start_date = models.DateTimeField()
    enrollment_end_date = models.DateTimeField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.course.name} - {self.name}"

class Problem(models.Model):
    DIFFICULTY_CHOICES = [
        ('EASY', 'easy'),
        ('MEDIUM', 'medium'),
        ('HARD', 'hard'),
    ]
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
    solution_link = models.URLField(blank=True, null=True)
    video_link = models.URLField(blank=True, null=True)
    language = models.CharField(max_length=20, choices=Course.CONTENT_LANGUAGE_CHOICES)
    starter_code = models.TextField(blank=True, null=True)
    test_cases = models.JSONField(blank=True, null=True)
    file_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.title} ({self.get_difficulty_display()})"

class Content(models.Model):
    CONTENT_TYPE_CHOICES = [
        ('TEXT', 'Text'),
        ('PROBLEM', 'Problem'),
        ('VIDEO', 'Video'),
        ('QUIZ', 'Quiz'),
        ('PROBLEMS', "Problems")
    ]
    
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=10, choices=CONTENT_TYPE_CHOICES)
    content_text = models.TextField(blank=True, null=True)  # For TEXT type
    problem = models.ForeignKey(Problem, on_delete=models.SET_NULL, blank=True, null=True)  # For PROBLEM type
    video_url = models.URLField(blank=True, null=True)  # For VIDEO type
    quiz_data = models.JSONField(blank=True, null=True)  # For QUIZ type
    file_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.title} ({self.get_type_display()})"

class CourseContent(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='contents')
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    section_title = models.CharField(max_length=100)
    sequence_number = models.PositiveIntegerField()
    is_unlocked_by_default = models.BooleanField(default=False)
    unlocks_next = models.BooleanField(default=True)
    unlock_days = models.PositiveIntegerField(
        default=0, 
        help_text="Days after Batch Start Date to unlock this content. 0 means available on start date."
    )

    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = [
            ('course', 'content'),
            ('course', 'sequence_number'),
        ]
        ordering = ['sequence_number']
    
    def __str__(self):
        return f"{self.course.name} - {self.section_title} ({self.sequence_number})"

class UserCourse(models.Model):
    PAYMENT_STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('PAID', 'Paid'),
        ('REFUNDED', 'Refunded'),
    ]

    COURSE_STATUS_CHOICES = [
        ('COMPLETED', 'Completed'),
        ('IN_PROGRESS', 'In Progress'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='enrolled_courses')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrollments')
    batch = models.ForeignKey(Batch, on_delete=models.CASCADE, null=True, blank=True)

    enrollment_date = models.DateTimeField(auto_now_add=True)
    completion_date = models.DateTimeField(blank=True, null=True)
    fees_paid = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    payment_status = models.CharField(max_length=10, choices=PAYMENT_STATUS_CHOICES, default='PENDING')
    current_content = models.ForeignKey(Content, on_delete=models.SET_NULL, blank=True, null=True)

    certificate_id = models.CharField(max_length=36, blank=True, null=True)
    status = models.CharField(max_length=20, choices=COURSE_STATUS_CHOICES, default='IN_PROGRESS')
    
    class Meta:
        unique_together = ['user', 'course']
    
    def __str__(self):
        return f"{self.user.username} - {self.course.name}"

class ProblemSubmission(models.Model):
    STATUS_CHOICES = [
        ('SOLVED', 'solved'),
        ('ATTEMPTED', 'attempted'),
        ('UNSOLVED', 'unsolved'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='submissions')
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE, related_name='submissions')
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, blank=True, null=True)
    content = models.ForeignKey(Content, on_delete=models.SET_NULL, blank=True, null=True)
    submitted_code = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    test_results = models.JSONField(blank=True, null=True)
    execution_time = models.IntegerField(blank=True, null=True)  # In milliseconds
    submitted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.problem.title} ({self.status})"

class UserContentProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='content_progress')
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    is_completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)
    last_accessed = models.DateTimeField(auto_now=True)
    notes = models.TextField(blank=True, null=True)
    is_locked = models.BooleanField(default=True)
    
    class Meta:
        unique_together = ['user', 'course', 'content']
    

    def __str__(self):
        status = "Completed" if self.is_completed else "In Progress"
        return f"{self.user.username} - {self.content.title} ({status})"

class QuizSubmission(models.Model):
    """Tracks user submissions for quizzes"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quiz_submissions')
    content = models.ForeignKey('Content', on_delete=models.CASCADE, limit_choices_to={'type': 'QUIZ'})
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    
    # Quiz data and answers
    quiz_data = models.JSONField(help_text="Original quiz questions and structure", default=dict)
    user_answers = models.JSONField(help_text="User's submitted answers", default=dict)
    
    # Results
    score = models.FloatField(help_text="Percentage score achieved", default=0)
    passed = models.BooleanField(help_text="Whether the user passed the quiz", default=False)
    correct_answers = models.PositiveIntegerField(blank=True, null=True)
    total_questions = models.PositiveIntegerField(blank=True, null=True)
    
    # Timing
    started_at = models.DateTimeField(blank=True, null=True)
    completed_at = models.DateTimeField(blank=True, null=True)
    time_taken = models.PositiveIntegerField(help_text="Time taken in seconds",blank=True, null=True)
    
    # Attempt tracking
    attempt_number = models.PositiveIntegerField(default=0)
    
    class Meta:
        unique_together = ['user', 'course', 'content']
    
    def __str__(self):
        return f"{self.user.username}'s quiz attempt #{self.attempt_number} ({self.score}%)"

class Order(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('CONFIRMED', 'Confirmed'),
        ('PROCESSING', 'Processing'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled'),
    ]

    # Relationships
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')

    # Order details
    order_id = models.CharField(max_length=256, unique=True)
    transaction_id = models.CharField(max_length=256, unique=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    payment_status = models.CharField(max_length=20, default='UNPAID')
    payment_method = models.CharField(max_length=30, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order #{self.order_id} - {self.user.username}"

    class Meta:
        ordering = ['-created_at']

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    mobile_number = models.CharField(max_length=15, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=1, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other'), ('N', 'Prefer not to say')], default='N')
    location = models.CharField(max_length=255, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    
    # College details
    college_name = models.CharField(max_length=255, blank=True, null=True)
    college_university = models.CharField(max_length=255, blank=True, null=True)
    degree = models.CharField(max_length=100, blank=True, null=True)
    branch = models.CharField(max_length=100, blank=True, null=True)
    year_of_study = models.PositiveIntegerField(blank=True, null=True)
    graduation_year = models.PositiveIntegerField(blank=True, null=True)
    enrollment_number = models.CharField(max_length=50, blank=True, null=True)
    cgpa = models.FloatField(blank=True, null=True)
    
    # Social Media
    linkedin_url = models.URLField(blank=True, null=True)
    twitter_handle = models.CharField(max_length=100, blank=True, null=True)
    website = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"

class Blog(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    course = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"

class Subscription(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
