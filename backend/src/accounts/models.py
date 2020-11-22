from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.expressions import Case
from django.db.models.fields import CharField
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager



POSITION_LISTS =(
    ('DE','Dealer'),
    ('SH','Shuffler'),
    ('FM','Floor Manager'),
    ('LS','Live Support'),
    ('MA','Manager'),
)

GENDER_LIST =(
    ('MA' , 'Male'),
    ('FE', 'Female'),
)

class CustomUser(AbstractUser):
    phonenumber = models.CharField(_('phone number'),max_length=9, blank=False , null=False,unique=True)
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(blank=True,max_length=20)
    last_name = models.CharField(blank=True,max_length=120)
    position = models.CharField(choices=POSITION_LISTS,blank=False,null=False,max_length=50)
    gender = models.CharField(choices=GENDER_LIST,blank=True,null=False,max_length=10)
    
    objects = CustomUserManager()
    USERNAME_FIELD = 'phonenumber'
    REQUIRED_FIELDS = ['email','position','gender']

    def __str__(self):
        return f"{self.last_name}"
   