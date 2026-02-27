from django.contrib import admin
from .models import Room, Contest, ContestContent, ContestSubmission


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_by', 'created_at')
    search_fields = ('name', 'description')
    readonly_fields = ('id', 'created_at')


@admin.register(Contest)
class ContestAdmin(admin.ModelAdmin):
    list_display = ('title', 'room', 'start_time', 'end_time', 'created_at')
    list_filter = ('room',)
    search_fields = ('title', 'description')
    readonly_fields = ('id', 'created_at')


@admin.register(ContestContent)
class ContestContentAdmin(admin.ModelAdmin):
    list_display = ('contest', 'content_type', 'reference_id', 'sequence_number')
    list_filter = ('content_type',)
    readonly_fields = ('id',)


@admin.register(ContestSubmission)
class ContestSubmissionAdmin(admin.ModelAdmin):
    list_display = ('user_identifier', 'contest', 'type', 'submitted_at')
    list_filter = ('type', 'contest')
    search_fields = ('user_identifier',)
    readonly_fields = ('id', 'submitted_at')
