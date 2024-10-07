from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import City
from .serializers.cities_serializer import CitySerializer

TOP_CITIES = ["Київ", "Дніпро", "Харків", "Запоріжжя", "Одеса", "Львів"]
CARTS_CITIES = ["Київ", "Харків", "Львів", "Одеса", "Дніпро", "Запоріжжя", "Кривий Ріг",
                "Миколаїв", "Тернопіль", "Луцьк"]


class CitiesViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all().order_by("city_title")
    serializer_class = CitySerializer
    permission_classes = [AllowAny]


class TopCitiesViewSet(viewsets.ModelViewSet):
    queryset = City.objects.filter(city_title__in=TOP_CITIES)
    serializer_class = CitySerializer
    permission_classes = [AllowAny]


class CartsCitiesViewSet(viewsets.ModelViewSet):
    queryset = City.objects.filter(city_title__in=CARTS_CITIES)
    serializer_class = CitySerializer
    permission_classes = [AllowAny]
