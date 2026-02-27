import django.db.models.deletion
import django.utils.timezone
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, default='')),
                ('created_by', models.CharField(blank=True, default='', max_length=255)),
                ('participants', models.JSONField(default=list)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Contest',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contests', to='rooms_app.room')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, default='')),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('created_by', models.CharField(blank=True, default='', max_length=255)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='ContestContent',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('contest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rooms_app.contest')),
                ('content_type', models.CharField(max_length=20)),
                ('reference_id', models.CharField(max_length=255)),
                ('sequence_number', models.IntegerField(default=0)),
            ],
            options={
                'ordering': ['sequence_number'],
            },
        ),
        migrations.CreateModel(
            name='ContestSubmission',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('contest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rooms_app.contest')),
                ('user_identifier', models.CharField(max_length=255)),
                ('content_reference_id', models.CharField(max_length=255)),
                ('type', models.CharField(max_length=20)),
                ('result_data', models.JSONField(default=dict)),
                ('submitted_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'ordering': ['-submitted_at'],
            },
        ),
    ]
