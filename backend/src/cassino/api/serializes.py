from django.db.models import fields
from rest_framework import serializers
from cassino.models import (ExtraShifts)


class ExtraSerialaizer(serializers.ModelSerializer):
    class Meta:
        model = ExtraShifts
        fields = "__all__"
        