from rest_framework import serializers

from main.models import City


class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = ["city_title", "city_image", "slug", "region"]
        read_only_fields = ["region"]
