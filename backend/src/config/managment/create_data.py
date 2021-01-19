from django.core.management.base import BaseCommand
from .cassino.models import Shifts , Dealers , Managers , Languages, ExtraShifts
import random
import datetime

shift_id = ['1','2','3','4','5']
language_id = ['1','2','3','4']
priority = ['Normal','Urgent']
quantity = ['1','2','3','4','5','6','7']

def generate_shift_id():
    index = random.randint(0,4)
    return shift_id[index]
def generate_language_id():
    index = random.randint(0,3)
    return language_id[index]
def generate_priority():
    index = random.randint(0,1)
    return priority[index]
def generate_quantity():
    index = random.randint(0,6)
    return quantity[index]

def generate_publish_date():
    year = random.randint(2020, 2030)
    month = random.randint(1, 12)
    day = random.randint(1, 28)
    return datetime.date(year, month, day)

def generate_public_time():
    hour = random.randint(0,23)    
    minute = random.randint(0,59)
    second = random.randint(0,59)
    return datetime.time(hour,minute,second)

class Command(BaseCommand):

    def add_arguments(self,parser):
        parser.add_arguments('file_name',type=str,help='this is txt file that contains the Extra ')

    def handle(self,*args, **kwargs):
        file_name = kwargs['file_name']
        with open(f'{file_name}.txt') as file :
            for row in file:
                title           =  row
                slug            =  row
                shift_id        = generate_shift_id()
                language_id     = generate_language_id()
                ExtraShift_Date = generate_publish_date()
                ExtraShift_Time = generate_public_time()
                priority        = generate_priority()
                quantity        = generate_quantity()

                Exrashift = ExtraShifts(
                    title = title,
                    slug = slug,
                    shift_id = shift_id,
                    language_id = language_id,
                    ExtraShift_Date = ExtraShift_Date,
                    ExtraShift_Time = ExtraShift_Time,
                    priority = priority,
                    quantity = quantity
                )
                ExtraShifts.save()
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
