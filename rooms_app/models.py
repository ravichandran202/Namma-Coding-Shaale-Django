import uuid
from datetime import datetime
from django.utils import timezone
from django.utils.timezone import make_aware, is_aware

class BaseMapModel:
    """Base class for in-memory map models."""
    objects = {}

    @classmethod
    def get(cls, id):
        return cls.objects.get(id)

    @classmethod
    def all(cls):
        return list(cls.objects.values())

    @classmethod
    def filter(cls, **kwargs):
        results = []
        for obj in cls.objects.values():
            match = True
            for k, v in kwargs.items():
                if getattr(obj, k, None) != v:
                    match = False
                    break
            if match:
                results.append(obj)
        return results

    def save(self):
        if not hasattr(self, 'id') or not self.id:
            self.id = str(uuid.uuid4())
        self.__class__.objects[self.id] = self

    def delete(self):
        if hasattr(self, 'id') and self.id in self.__class__.objects:
            del self.__class__.objects[self.id]

class Room(BaseMapModel):
    # Separate objects map to avoid sharing across subclasses unintentionally
    objects = {}
    
    def __init__(self, name, description, created_by, id=None):
        self.id = id or str(uuid.uuid4())
        self.name = name
        self.description = description
        self.created_by = created_by  # User ID or Email
        self.participants = []  # List of User emails
        self.created_at = timezone.now()

class Contest(BaseMapModel):
    objects = {}
    
    def __init__(self, room_id, title, description, start_time, end_time, created_by, id=None):
        self.id = id or str(uuid.uuid4())
        self.room_id = room_id
        self.title = title
        self.description = description
        self.start_time = start_time
        self.end_time = end_time
        self.created_by = created_by  # User ID or Email
        self.created_at = timezone.now()

    @property
    def is_active(self):
        now = timezone.now()
        start = self.start_time if is_aware(self.start_time) else make_aware(self.start_time)
        end = self.end_time if is_aware(self.end_time) else make_aware(self.end_time)
        return start <= now <= end

    @property
    def is_past(self):
        now = timezone.now()
        end = self.end_time if is_aware(self.end_time) else make_aware(self.end_time)
        return now > end

class ContestContent(BaseMapModel):
    objects = {}
    
    def __init__(self, contest_id, content_type, reference_id, sequence_number=0, id=None):
        self.id = id or str(uuid.uuid4())
        self.contest_id = contest_id
        self.content_type = content_type  # 'PROBLEM' or 'QUIZ'
        self.reference_id = reference_id  # ID from main app's Content table
        self.sequence_number = sequence_number

class ContestSubmission(BaseMapModel):
    objects = {}
    
    def __init__(self, contest_id, user_identifier, content_reference_id, type_str, result_data, id=None):
        self.id = id or str(uuid.uuid4())
        self.contest_id = contest_id
        self.user_identifier = user_identifier
        self.content_reference_id = content_reference_id
        self.type = type_str  # 'PROBLEM' or 'QUIZ'
        # result_data depends on type: 
        # For 'PROBLEM': {'status': 'SOLVED', 'execution_time': ...}
        # For 'QUIZ': {'score': 80, 'passed': True}
        self.result_data = result_data 
        self.submitted_at = timezone.now()
