from rest_framework import serializers

from main.models import Profession


class ProfessionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profession
        fields = ["title", "slug", "rubric_id"]
