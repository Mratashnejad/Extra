from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.expressions import Case
from django.db.models.fields import CharField
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager



class CustomUser(AbstractUser):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=CASCADE)
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
        return self.user.username
   
class Manager(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftTitle = models.CharField(max_length=120)
    def __str__(self):
        return self.user.username

    

class Dealer(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    shiftManager = models.ForeignKey(Manager, on_delete=CASCADE)
    language = models.CharField(max_length=100)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(max_length=100) # reserve ready 
    def __str__(self):
        return self.user.username


class LiveSuppoert(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    shiftManager = models.ForeignKey(Manager, on_delete=CASCADE)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(max_length=100) # reserve ready 
    def __str__(self):
        return self.user.username


class FloorManager(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    shiftManager = models.ForeignKey(Manager, on_delete=CASCADE)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(max_length=100) # reserve ready 
    def __str__(self):
        return self.user.username


class Shuffler (models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    shiftManager = models.ForeignKey(Manager, on_delete=CASCADE)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(max_length=100) # reserve ready 

    def __str__(self):
        return self.user.username


class Shift(models.Model):
    dealer = models.ForeignKey(Dealer,on_delete=CASCADE)
    manager = models.ForeignKey(Manager,on_delete=CASCADE)
    liveSupport = models.ForeignKey(LiveSuppoert,on_delete=CASCADE)
    floorManager = models.ForeignKey(FloorManager,on_delete=CASCADE)
    line = models.CharField(max_length=150) # line of cassino 

    def __str__(self):
        return self.user.username

    title = models.CharField(max_length=120)
    language = models.CharField(max_length=100)
    userCount =models.CharField(max_length=120)

    def __str__(self):
        return self.title

    