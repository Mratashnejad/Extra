from rest_framework import viewsets
from .serializes import ExtraSerialaizer
from cassino.models import ExtraShifts


class ExtrashiftView(viewsets.ModelViewSet):
    serializer_class = ExtraSerialaizer
    queryset = ExtraShifts.objects.all()
    