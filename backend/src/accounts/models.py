from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.expressions import Case
from django.db.models.fields import CharField
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager





GENDER_LIST =(
    ('1' , 'Male'),
    ('2', 'Female'),
)

class CustomUser(AbstractUser):
    POSITION_LISTS =(('1',"Dealer"),('2',"Shuffler"),('3',"Floor Manager"),('4',"Live Support"),('5',"Manager"))
    position = models.CharField(choices=POSITION_LISTS,default='1',blank=False,null=False , max_length=50)
    phonenumber = models.CharField(_('phone number'),max_length=9, blank=False , null=False,unique=True)
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(blank=True,max_length=20)
    last_name = models.CharField(blank=True,max_length=120)
    gender = models.CharField(choices=GENDER_LIST,default='1',blank=True,null=False,max_length=50)

    objects = CustomUserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','phonenumber']

    def __str__(self):
        return f"{self.username}"
   