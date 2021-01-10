from django.http.response import HttpResponseBadRequest
from rest_framework import viewsets
from rest_framework import response
from rest_framework.fields import SlugField
from .serializes import ExtraSerialaizer
from cassino.models import ExtraShifts
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST


class ExtrashiftView(viewsets.ModelViewSet):
    serializer_class = ExtraSerialaizer
    queryset = ExtraShifts.objects.all()
    def post(self ,request,*args, **kwargs):
        # slug = request.data.get('slug',None)
        quantity = ExtraShifts.quantity
        
        if quantity > 3:
            return Response({"message": "Invalid data"}, status=HTTP_400_BAD_REQUEST)
