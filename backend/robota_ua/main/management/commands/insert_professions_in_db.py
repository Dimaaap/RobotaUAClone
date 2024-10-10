from django.core.management.base import BaseCommand

from slugify import slugify

from main.models import Profession, ProfessionRubrics
from main.data_storage import DataStorage

professions = DataStorage.PROFESSIONS_DATA


class Command(BaseCommand):
    help = "Insert professions in DB"

    def handle(self, *args, **kwargs):
        try:
            for profession in professions:
                new_profession = Profession.objects.create(title=profession["title"],
                                                           slug=slugify(profession["title"]))
                for rubric in profession["rubric"]:
                    profession_rubric = ProfessionRubrics.objects.get(title=rubric)
                    new_profession.rubric_id.add(profession_rubric)
                new_profession.save()
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error, {e}"))