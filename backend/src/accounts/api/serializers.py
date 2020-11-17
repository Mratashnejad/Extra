from rest_framework import serializers
from rest_framework import fields
from rest_framework.serializers import ModelSerializer
from accounts.models import CustomUser


class UserSerializer (serializers.ModelSerializer):
    class Meta :
        model = CustomUser
        fields = ['id','email','first_name','last_name','spouse_name','date_of_birth']

