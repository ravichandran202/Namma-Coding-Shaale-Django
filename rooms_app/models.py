import uuid
from django.core.exceptions import ValidationError
from django.db import models
from django.utils import timezone
from django.utils.timezone import make_aware, is_aware


class Room(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')
    created_by = models.CharField(max_length=255, blank=True, default='')
    participants = models.JSONField(default=list)
    created_at = models.DateTimeField(default=timezone.now)

    def __init__(self, *args, **kwargs):
        if 'created_by' in kwargs and callable(kwargs['created_by']):
            kwargs['created_by'] = kwargs['created_by']()
        super().__init__(*args, **kwargs)

    @classmethod
    def get(cls, id):
        try:
            return cls.objects.get(id=id)
        except (cls.DoesNotExist, ValueError, ValidationError):
            return None

    @classmethod
    def all(cls):
        return list(cls.objects.all())

    @classmethod
    def filter(cls, **kwargs):
        return list(cls.objects.filter(**kwargs))

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created_at']


class Contest(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='contests')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    created_by = models.CharField(max_length=255, blank=True, default='')
    created_at = models.DateTimeField(default=timezone.now)

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

    @classmethod
    def get(cls, id):
        try:
            return cls.objects.get(id=id)
        except (cls.DoesNotExist, ValueError, ValidationError):
            return None

    @classmethod
    def all(cls):
        return list(cls.objects.all())

    @classmethod
    def filter(cls, **kwargs):
        return list(cls.objects.filter(**kwargs))

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']


class ContestContent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
    content_type = models.CharField(max_length=20)
    reference_id = models.CharField(max_length=255)
    sequence_number = models.IntegerField(default=0)

    @classmethod
    def get(cls, id):
        try:
            return cls.objects.get(id=id)
        except (cls.DoesNotExist, ValueError, ValidationError):
            return None

    @classmethod
    def all(cls):
        return list(cls.objects.all())

    @classmethod
    def filter(cls, **kwargs):
        return list(cls.objects.filter(**kwargs))

    def __str__(self):
        return f"{self.content_type}: {self.reference_id}"

    class Meta:
        ordering = ['sequence_number']


class ContestSubmission(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
    user_identifier = models.CharField(max_length=255)
    content_reference_id = models.CharField(max_length=255)
    type = models.CharField(max_length=20)
    result_data = models.JSONField(default=dict)
    submitted_at = models.DateTimeField(default=timezone.now)

    def __init__(self, *args, **kwargs):
        if 'type_str' in kwargs:
            kwargs['type'] = kwargs.pop('type_str')
        super().__init__(*args, **kwargs)

    @classmethod
    def get(cls, id):
        try:
            return cls.objects.get(id=id)
        except (cls.DoesNotExist, ValueError, ValidationError):
            return None

    @classmethod
    def all(cls):
        return list(cls.objects.all())

    @classmethod
    def filter(cls, **kwargs):
        return list(cls.objects.filter(**kwargs))

    def __str__(self):
        return f"{self.user_identifier} - {self.type}"

    class Meta:
        ordering = ['-submitted_at']
