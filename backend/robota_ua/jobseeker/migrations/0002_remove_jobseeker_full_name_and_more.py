# Generated by Django 4.2 on 2024-10-14 14:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobseeker', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobseeker',
            name='full_name',
        ),
        migrations.RemoveField(
            model_name='jobseeker',
            name='join_date',
        ),
    ]
