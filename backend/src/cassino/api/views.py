from django.db.models import Q
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.query import QuerySet
from django.http import Http404
from django.shortcuts import render,get_list_or_404
from django.utils import timezone
from rest_framework import response
from rest_framework import status
from rest_framework.generics import (ListAPIView,RetrieveAPIView,CreateAPIView,UpdateAPIView,DestroyAPIView)
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST
from cassino.models import ExtraShifts,ExtraShiftsOrder,Dealers
from .serializes import (ExtraSerialaizer,DealersSerialaizer)
import stripe

# stripe.api_key = settings.STRIPE_SECRET_KEY

class UserIDView(APIView):
    def get(self,request,*args, **kwargs):
        return Response({'userID':request.user.id},status=HTTP_200_OK)

class DealersListView(ListAPIView):
    permission_classes =(AllowAny,)
    serializer_class = DealersSerialaizer
    queryset = Dealers.objects.all()

class ExtraShiftListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ExtraSerialaizer
    queryset = ExtraShifts.objects.all().order_by('create_at')

    def post(self,request,*args, **kwargs):
        extraquantity = request.data.get('quantity',None)
        if extraquantity == 0 :
            return response({"massage": "test invalid"},status=HTTP_400_BAD_REQUEST)
            


