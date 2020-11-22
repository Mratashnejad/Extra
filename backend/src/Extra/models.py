from django.core.checks import messages
from django.db import models
from django.contrib.auth.models import AbstractUser, User
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
#this is lable of the Status dealer
# if dealer is NOT BLOCK can countinue 
# 
STATUS_LABALE=(
    ('RDY','Ready'),
    ('RES','Reserve'),
    ('BLK','BLOCK'),
)
#ADD DATE TUPLE

class Manager(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    managerTitle = models.CharField(max_length=120)

    ### check managers only could be a managers !!

    # def checkmanager(self):
    #     if f"{self.user.position}" != 'MA': 
    #         raise messages("other user can not be a managers!")
    #     return False

   
        
    def __str__(self):
        return f"{self.managerTitle}"
  
  
# shift made by Manager - witchline - and wich languages 

class Shift(models.Model):
    shiftManager = models.ForeignKey(Manager,on_delete=CASCADE) 
    line = models.CharField(max_length=150) # line of cassino 
    language = models.CharField(choices=LANGUAGE_CHOICES,max_length=50)

    def __str__(self):
        return f"{self.line}"


class InfoCustomUser(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=CASCADE)
    shiftDate = models.CharField(max_length=100)
    extraCounter = models.IntegerField(default=0)
    cancelCounter = models.IntegerField(default=0)
    status = models.CharField(choices=STATUS_LABALE , default='RDY',max_length=10) # reserve ready 
    shift = models.ForeignKey(Shift,on_delete=CASCADE)

    def __str__(self):
        return f"{self.extraCounter} of {self.user.First_name}"
   

class Extra(models.Model):
    
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    label = models.CharField(choices=ExtraLabelCategory,max_length=100)
    date  = models.DateField()
    quantity = models.IntegerField(default=1)
    #image = models.ImageField()
    def __str__(self):
        return f"{self.title}"

class ExtraOrder(models.Model):
    ExtraName = models.ForeignKey(Extra,on_delete=CASCADE)
    ExtraUsers = models.ManyToManyField(CustomUser)
    OrderDate = models.DateTimeField(_("ORDER TIME ") , auto_now_add=True)
    
    # only staff can add an EXTRA ( managers and Live supports)
    # 
    # check if users have an Extra could be take it
    # after take an extra counter ++
    # dealer can take only one of the ONE Extra
     

    def __str__(self):
        return f"{self.ExtraName}"









# future : WHEN user add cancleSHift automaticly raise on an Extra !
