from uuid import uuid4

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

from .managers import CustomJobseekerManager


class Jobseeker(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid4)
    full_name = models.CharField(max_length=255, default="")
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=255, default="")
    token = models.CharField(max_length=255, default="")
    is_email_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["full_name"]

    objects = CustomJobseekerManager()

    def __str__(self):
        return f"{self.full_name} {self.email}"

