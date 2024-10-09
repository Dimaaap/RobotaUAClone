from django.core.management.base import BaseCommand

from slugify import slugify

from main.models import ProfessionRubrics
from main.data_storage import DataStorage

rubrics = DataStorage.RUBRICS


class Command(BaseCommand):
    help = "Insert profession categories in DB"

    def handle(self, *args, **kwargs):
        try:
            for rubric in rubrics:
                new_rubric = ProfessionRubrics.objects.create(title=rubric,
                                                             slug=slugify(rubric))
                new_rubric.save()
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error, {e}'))