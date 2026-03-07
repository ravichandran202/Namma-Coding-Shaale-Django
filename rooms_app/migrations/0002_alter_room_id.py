# Custom migration: Replace Room UUID PK with short char ID (XXXX-YYYY).
# Because MySQL/TiDB does not support ALTER COLUMN on primary key columns,
# we drop and recreate the tables (all FK dependents of Room as well).

from django.db import migrations, models
import rooms_app.models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms_app', '0001_initial'),
    ]

    operations = [
        # 1. Drop dependent tables (FK → rooms_app_room) in reverse dependency order
        migrations.RunSQL(
            sql="DROP TABLE IF EXISTS rooms_app_contestsubmission;",
            reverse_sql="",
        ),
        migrations.RunSQL(
            sql="DROP TABLE IF EXISTS rooms_app_contestcontent;",
            reverse_sql="",
        ),
        migrations.RunSQL(
            sql="DROP TABLE IF EXISTS rooms_app_contest;",
            reverse_sql="",
        ),
        # 2. Drop and recreate rooms_app_room with VARCHAR(9) PK
        migrations.RunSQL(
            sql="DROP TABLE IF EXISTS rooms_app_room;",
            reverse_sql="",
        ),
        migrations.RunSQL(
            sql="""
                CREATE TABLE rooms_app_room (
                    id VARCHAR(9) NOT NULL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    description LONGTEXT NOT NULL,
                    created_by VARCHAR(255) NOT NULL,
                    participants JSON NOT NULL,
                    created_at DATETIME(6) NOT NULL
                );
            """,
            reverse_sql="DROP TABLE IF EXISTS rooms_app_room;",
        ),
        # 3. Recreate dependent tables
        migrations.RunSQL(
            sql="""
                CREATE TABLE rooms_app_contest (
                    id CHAR(32) NOT NULL PRIMARY KEY,
                    room_id VARCHAR(9) NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    description LONGTEXT NOT NULL,
                    start_time DATETIME(6) NOT NULL,
                    end_time DATETIME(6) NOT NULL,
                    created_by VARCHAR(255) NOT NULL,
                    created_at DATETIME(6) NOT NULL,
                    CONSTRAINT fk_contest_room FOREIGN KEY (room_id) REFERENCES rooms_app_room(id) ON DELETE CASCADE
                );
            """,
            reverse_sql="DROP TABLE IF EXISTS rooms_app_contest;",
        ),
        migrations.RunSQL(
            sql="""
                CREATE TABLE rooms_app_contestcontent (
                    id CHAR(32) NOT NULL PRIMARY KEY,
                    contest_id CHAR(32) NOT NULL,
                    content_type VARCHAR(20) NOT NULL,
                    reference_id VARCHAR(255) NOT NULL,
                    sequence_number INT NOT NULL,
                    CONSTRAINT fk_content_contest FOREIGN KEY (contest_id) REFERENCES rooms_app_contest(id) ON DELETE CASCADE
                );
            """,
            reverse_sql="DROP TABLE IF EXISTS rooms_app_contestcontent;",
        ),
        migrations.RunSQL(
            sql="""
                CREATE TABLE rooms_app_contestsubmission (
                    id CHAR(32) NOT NULL PRIMARY KEY,
                    contest_id CHAR(32) NOT NULL,
                    user_identifier VARCHAR(255) NOT NULL,
                    content_reference_id VARCHAR(255) NOT NULL,
                    type VARCHAR(20) NOT NULL,
                    result_data JSON NOT NULL,
                    submitted_at DATETIME(6) NOT NULL,
                    CONSTRAINT fk_submission_contest FOREIGN KEY (contest_id) REFERENCES rooms_app_contest(id) ON DELETE CASCADE
                );
            """,
            reverse_sql="DROP TABLE IF EXISTS rooms_app_contestsubmission;",
        ),
        # 4. Tell Django's migration state that Room.id is now a CharField
        migrations.AlterField(
            model_name='room',
            name='id',
            field=models.CharField(
                default=rooms_app.models.generate_room_id,
                editable=False,
                max_length=9,
                primary_key=True,
                serialize=False,
            ),
        ),
    ]
