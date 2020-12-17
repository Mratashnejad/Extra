from django.db.models import fields
from rest_framework import serializers
from cassino.models import ExtraShifts,Dealers


class ExtraSerialaizer(serializers.ModelSerializer):
    class Meta:
        model = ExtraShifts
        fields = "__all__"

class DealersSerialaizer(serializers.ModelSerializer):
    class Meta:
        model = Dealers
        fields = "__all__"