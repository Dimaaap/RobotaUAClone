from rest_framework import serializers

from main.models import City


class CitySerializer(serializers.ModelSerializer):

    region_title = serializers.SerializerMethodField()

    class Meta:
        model = City
        fields = ["city_title", "city_image", "slug", "region_title"]
        read_only_fields = ["region"]

    def get_region_title(self, obj):
        return obj.region.region_title
