from django.core.management.base import BaseCommand

from slugify import slugify

from main.models import Region, City
from main.data_storage import DataStorage


cities = DataStorage.CITIES_INFO


class Command(BaseCommand):
    help = "Insert cities in DB"

    def handle(self, *args, **kwargs):
        try:
            for region, cities_list in cities.items():
                region_in_db = Region.objects.get(region_title=region)
                for city in cities_list:
                    city_slug = slugify(city)
                    new_city = City.objects.create(city_title=city,
                                                   slug=city_slug,
                                                   region=region_in_db)
                    new_city.save()
            self.stdout.write(self.style.SUCCESS("Cities was inserted successful"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error, {e}"))