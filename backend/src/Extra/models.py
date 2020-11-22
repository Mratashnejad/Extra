from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.expressions import Case
from django.db.models.fields import CharField
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager


LANGUAGE_CHOICES =(
    ('EN','ENGLISH'),
    ('RU','RUSSIAN'),
    ('AR','ARABIC'),
    ('TR','TURKISH'),
    ('PR','PERSIAN'),
    ('ES','SPANISH'),
    ('ARM','ARMENIAN'),
)

#ADD DATE TUPLE



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
   
class Manager(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    managerTitle = models.CharField(max_length=120)

    def __str__(self):
        return self.managerTitle

class Dealer(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    shiftManager = models.ForeignKey(Manager, on_delete=CASCADE)
    language = models.CharField(choices=LANGUAGE_CHOICES, max_length=10)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(max_length=100) # reserve ready 
    def __str__(self):
        return f"{self.user}"

class LiveSupport(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    shiftManager = models.ForeignKey(Manager, on_delete=CASCADE)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(max_length=100) # reserve ready 
    def __str__(self):
        return f"{self.user}"

class FloorManager(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    shiftManager = models.ForeignKey(Manager, on_delete=CASCADE)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(max_length=100) # reserve ready 
    def __str__(self):
        return f"{self.user}"

class Shuffler(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    shiftManager = models.ForeignKey(Manager, on_delete=CASCADE)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(max_length=100) # reserve ready 
    def __str__(self):
        return f"{self.user}"


class Shift(models.Model):
    dealer = models.ManyToManyField(Dealer)
    manager = models.ForeignKey(Manager,on_delete=CASCADE)
    liveSupport = models.ManyToManyField(LiveSupport)
    floorManager = models.ManyToManyField(FloorManager)
    shuffler = models.ManyToManyField(Shuffler)
    line = models.CharField(max_length=150) # line of cassino 
    title = models.CharField(max_length=120)
    language = models.CharField(choices=LANGUAGE_CHOICES, max_length=10)


    def __str__(self):
        return self.title
   
    