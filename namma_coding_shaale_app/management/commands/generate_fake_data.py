import random
from django.core.management.base import BaseCommand
from faker import Faker
from django.contrib.auth import get_user_model
from namma_coding_shaale_app.models import (
    Course, Problem, Content, CourseContent, 
    UserCourse, ProblemSubmission, UserContentProgress
)

User = get_user_model()
fake = Faker()

class Command(BaseCommand):
    help = 'Generates fake data for the learning platform'

    def handle(self, *args, **options):
        self.stdout.write("Generating fake data...")
        
        # Create some users
        users = []
        for _ in range(10):
            user = User.objects.create_user(
                username=fake.unique.user_name(),
                email=fake.unique.email(),
                password='testpass123'
            )
            users.append(user)
        self.stdout.write(f"Created {len(users)} users")

        # Create courses
        languages = ['PYTHON', 'JAVASCRIPT', 'JAVA', 'CPP', 'GO', 'RUST']
        courses = []
        for i in range(5):
            course = Course.objects.create(
                name=f"{fake.word().title()} {fake.word().title()} Course",
                description=fake.paragraph(),
                language=random.choice(languages),
                is_premium=random.choice([True, False]),
                base_price=random.randint(0, 200)
            )
            courses.append(course)
        self.stdout.write(f"Created {len(courses)} courses")

        # Create problems
        difficulties = ['EASY', 'MEDIUM', 'HARD']
        problems = []
        for i in range(20):
            problem = Problem.objects.create(
                title=f"Problem: {fake.sentence(nb_words=4)}",
                description=fake.paragraph(nb_sentences=5),
                difficulty=random.choice(difficulties),
                solution_link=fake.url() if random.choice([True, False]) else None,
                video_link=fake.url() if random.choice([True, False]) else None,
                language=random.choice(languages),
                starter_code=f"def solution():\n    # {fake.sentence()}\n    pass",
                test_cases={
                    "inputs": [random.randint(1, 100) for _ in range(3)],
                    "outputs": [random.randint(1, 100) for _ in range(3)]
                }
            )
            problems.append(problem)
        self.stdout.write(f"Created {len(problems)} problems")

        # Create content items
        content_types = ['TEXT', 'PROBLEM', 'VIDEO', 'QUIZ']
        contents = []
        for i in range(30):
            content_type = random.choice(content_types)
            content_data = {
                'title': f"Content: {fake.sentence(nb_words=3)}",
                'type': content_type,
                'content_text': fake.paragraph(nb_sentences=5) if content_type == 'TEXT' else None,
                'problem': random.choice(problems) if content_type == 'PROBLEM' else None,
                'video_url': fake.url() if content_type == 'VIDEO' else None,
                'quiz_data': {
                    'questions': [
                        {'question': fake.sentence(), 'options': [fake.word() for _ in range(4)], 'answer': random.randint(0, 3)}
                        for _ in range(5)
                    ]
                } if content_type == 'QUIZ' else None
            }
            content = Content.objects.create(**content_data)
            contents.append(content)
        self.stdout.write(f"Created {len(contents)} content items")

        # Create course content mappings
        course_contents = []
        for course in courses:
            # Select 5-10 random content items for each course
            selected_contents = random.sample(contents, k=random.randint(5, 10))
            for i, content in enumerate(selected_contents, start=1):
                course_content = CourseContent.objects.create(
                    course=course,
                    content=content,
                    section_title=f"Section {i}: {fake.word().title()}",
                    sequence_number=i,
                    is_unlocked_by_default=(i == 1),  # First item always unlocked
                    unlocks_next=True
                )
                course_contents.append(course_content)
        self.stdout.write(f"Created {len(course_contents)} course content mappings")

        # Create user course enrollments
        enrollments = []
        for user in users:
            # Each user enrolls in 1-3 random courses
            selected_courses = random.sample(courses, k=random.randint(1, 3))
            for course in selected_courses:
                enrollment = UserCourse.objects.create(
                    user=user,
                    course=course,
                    fees_paid=course.base_price if course.is_premium else 0,
                    payment_status='PAID' if course.is_premium else 'PENDING',
                    current_content=course.contents.first().content
                )
                enrollments.append(enrollment)
        self.stdout.write(f"Created {len(enrollments)} user course enrollments")

        # Create user content progress
        progresses = []
        for enrollment in enrollments:
            # Mark some content items as completed
            course_contents = enrollment.course.contents.order_by('sequence_number')
            num_completed = random.randint(0, min(3, course_contents.count()))
            
            for i, cc in enumerate(course_contents[:num_completed]):
                progress = UserContentProgress.objects.create(
                    user=enrollment.user,
                    content=cc.content,
                    course=enrollment.course,
                    is_completed=True,
                    completed_at=fake.date_time_this_year()
                )
                progresses.append(progress)
                
                # Update current_content to the next one
                if i == num_completed - 1 and num_completed < course_contents.count():
                    enrollment.current_content = course_contents[num_completed].content
                    enrollment.save()
        self.stdout.write(f"Created {len(progresses)} user content progresses")

        # Create problem submissions
        submissions = []
        for progress in progresses:
            if progress.content.type == 'PROBLEM' and progress.content.problem:
                submission = ProblemSubmission.objects.create(
                    user=progress.user,
                    problem=progress.content.problem,
                    course=progress.course,
                    content=progress.content,
                    submitted_code=f"def solution():\n    # {fake.sentence()}\n    return {random.randint(1, 100)}",
                    status=random.choice(['SOLVED', 'ATTEMPTED', 'UNSOLVED']),
                    test_results={
                        'passed': random.randint(0, 3),
                        'total': 3,
                        'details': [{'input': i, 'expected': e, 'got': e if random.choice([True, False]) else i} 
                                   for i, e in zip([1,2,3], [1,2,3])]
                    },
                    execution_time=random.randint(100, 5000)
                )
                submissions.append(submission)
        self.stdout.write(f"Created {len(submissions)} problem submissions")

        self.stdout.write(self.style.SUCCESS("Successfully generated fake data!"))