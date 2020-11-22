from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.expressions import Case
from django.db.models.fields import CharField
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager

class CustomUser(AbstractUser):
    phonenumber = models.CharField(_('phone number'),max_length=9, blank=False , null=False,unique=True)
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(blank=True,max_length=100)
    last_name = models.CharField(blank=True,max_length=150)
    position = models.CharField(blank=False,max_length=50)
    gender = models.CharField(blank=True, max_length=10)

   
    objects = CustomUserManager()

    USERNAME_FIELD = 'phonenumber'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.first_name + "" + self.last_name
   