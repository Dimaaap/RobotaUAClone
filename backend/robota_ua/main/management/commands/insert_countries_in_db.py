from django.core.management.base import BaseCommand
from main.models import Country
from main.data_storage import DataStorage

countries = DataStorage.COUNTRIES


class Command(BaseCommand):
    help = "Insert countries in DB"

    def handle(self, *args, **kwargs):
        for country in countries:
            new_country, created = Country.objects.get_or_create(**country)

            if created:
                self.stdout.write(self.style.SUCCESS(f"Country {country} created"))
            else:
                self.stdout.write(self.style.ERROR(f"Error"))

