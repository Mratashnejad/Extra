from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.expressions import Case
from django.db.models.fields import CharField
from django.utils.translation import ugettext_lazy as _

from accounts.models import CustomUser


LANGUAGE_CHOICES =(
    ('EN','ENGLISH'),
    ('RU','RUSSIAN'),
    ('AR','ARABIC'),
    ('TR','TURKISH'),
    ('PR','PERSIAN'),
    ('ES','SPANISH'),
    ('ARM','ARMENIAN'),
)

ExtraLabelCategory=(
    ('Mo','Morning Shift'),
    ('Mi','Middle Shift'),
    ('Ni','Night Shift'),
)

#ADD DATE TUPLE

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

class Extra(models.Model):
    title = models.CharField(max_length=100)
    #slug = models.SlugField()
    label = models.CharField(choices=ExtraLabelCategory,max_length=100)
    date  = models.DateField()
    quantity = models.IntegerField(default=1)
    #image = models.ImageField()

    def __str__(self):
        return f"{self.title}"
