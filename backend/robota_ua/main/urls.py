from django.urls import path

from .views import *

urlpatterns = [
    path("", CitiesViewSet.as_view({"get": "list"}), name="all_cities"),
    path("top-cities", TopCitiesViewSet.as_view({"get": "list"}), name="top_cities"),
    path("carts-cities", CartsCitiesViewSet.as_view({"get": "list"}), name="carts_cities"),
    path("profession-rubrics", ProfessionRubricViewSet.as_view({"get": "list"}), name="profession_rubrics")
]