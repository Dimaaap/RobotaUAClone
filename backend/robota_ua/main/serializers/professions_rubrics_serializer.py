from rest_framework import serializers

from main.models import ProfessionRubrics


class ProfessionRubricsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProfessionRubrics
        fields = ["title", "slug"]
