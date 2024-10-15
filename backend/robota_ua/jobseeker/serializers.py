from rest_framework import serializers
from django.contrib.auth import get_user_model


jobseeker = get_user_model()
PASSWORD_MIN_LENGTH = 6


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=PASSWORD_MIN_LENGTH)

    class Meta:
        model = jobseeker
        fields = ("email", "password", "full_name")
        
    def create(self, validated_data):
        new_jobseeker = jobseeker.objects.create_user(**validated_data)
        return new_jobseeker