from django.core.management.base import BaseCommand

from slugify import slugify

from main.models import Country
from main.models import Region
from main.parsers.parse_regions import ParseRegions


class Command(BaseCommand):
    help = "Insert regions in DB"

    def handle(self, *args, **kwargs):
        parsed_regions = ParseRegions()
        regions_list = parsed_regions.parse_request()
        country = Country.objects.first()

        try:
            for region in regions_list:
                slugify_title = slugify(region)
                new_region = Region.objects.create(region_title=region,
                                                   slug=slugify_title,
                                                   country=country)
                new_region.save()
            self.stdout.write(self.style.SUCCESS(f"Regions was created"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(e))



