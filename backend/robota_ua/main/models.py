from uuid import uuid4

from django.db import models


class Country(models.Model):
    country_id = models.UUIDField(primary_key=True, default=uuid4)
    country_title = models.CharField(max_length=50, default="")
    slug = models.CharField(max_length=50, default="")

    def __str__(self):
        return f"{self.country_title} {self.slug}"


class Region(models.Model):
    region_id = models.UUIDField(primary_key=True, default=uuid4)
    region_title = models.CharField(max_length=100, default="")
    slug = models.SlugField(max_length=100, default="")

    country = models.ForeignKey(Country, on_delete=models.CASCADE, default="", related_name="regions")

    def __str__(self):
        return f'{self.region_title} {self.slug}'


class City(models.Model):
    city_id = models.UUIDField(primary_key=True, default=uuid4)
    city_title = models.CharField(max_length=100, default="")
    city_image = models.URLField(max_length=255, default="")
    slug = models.CharField(max_length=100, default="")

    region = models.ForeignKey(Region, on_delete=models.CASCADE, default="", related_name="cities")

    def __str__(self):
        return f'{self.city_title} {self.slug}'


class ProfessionRubrics(models.Model):
    rubric_id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=150, default="")
    slug = models.SlugField(max_length=150, default="")

    def __str__(self):
        return f'{self.title} {self.slug}'


class Profession(models.Model):
    profession_id = models.UUIDField(primary_key=True, default=uuid4)
    title = models.CharField(max_length=100, default="")
    slug = models.CharField(max_length=100, default="")

    rubric_id = models.ManyToManyField(ProfessionRubrics, default="")

    def __str__(self):
        return f"{self.title} {self.slug}"