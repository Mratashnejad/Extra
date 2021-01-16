from django.core.management.base import BaseCommand


class Command(BaseCommand):

    def add_arguments(self,parser):
        parser.add_arguments('file_name',type=str,help='this is txt file that contains the Extra ')

    def handele(self,*args, **kwargs):
        file_name = kwargs('file_name')
