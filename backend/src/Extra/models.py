from django.contrib.auth.models import AbstractUser, User
from django.db import models
from django.db.models.fields import CharField
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db.models.deletion import CASCADE
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


#language is Very importants entire all cassino and it should be ADDABLE
class Languages(models.Model):
    id = models.AutoField(primary_key=True)
    Language_name = models.CharField(max_length=255)




#Managers it means PITBOSS OR ADMIN SITE
class Managers(models.Model):
    id = models.AutoField(primary_key=True)
    admin = models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)
    objects = models.Manager()




#Staffs it means LIVE SUPPORTS
class Staffs(models.Model):
    id= models.AutoField(primary_key=True)
    admin = models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)
    fcm_token = models.TextField(default="")
    objects = models.Manager()
  
#shift more important
class Shifts(models.Model):
    id = models.AutoField(primary_key=True)
    shift_name = models.CharField(max_length=255)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    manager_id = models.ForeignKey(Managers,on_delete=models.CASCADE)
    staff_id = models.ForeignKey(Staffs,on_delete=models.CASCADE)

#Staffs who working on Tables of dealing cards /Dealer is first items of ONE SHIFT
class Dealers(models.Model):
    id = models.AutoField(primary_key=True)
    admin = models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    shift_id = models.ForeignKey(Shifts,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)
    fcm_token = models.TextField(default="")
    profile_pic = models.ImageField()
    objects = models.Manager()

#people who manages Salons
class FloorManagers(models.Model):
    id = models.AutoField(primary_key=True)
    admin = models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    shift_id = models.ForeignKey(Shifts,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)
    fcm_token = models.TextField(default="")
    profile_pic = models.ImageField()
    objects = models.Manager()

#people who shuffles Cards
class Shufflers(models.Model):
    id = models.AutoField(primary_key=True)
    admin = models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    shift_id = models.ForeignKey(Shifts,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)
    fcm_token = models.TextField(default="")
    profile_pic = models.ImageField()
    objects = models.Manager()



class ExtraShifts(models.Model):
    id = models.AutoField(primary_key=True)
    shift_id = models.ForeignKey(Shifts,on_delete=models.CASCADE)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    ExtraShift_Date = models.DateField() # which day ? thay need people to take an extra
    ExtraShift_Time = models.TimeField() # what time ?  thay need people to take an extra
    create_at = models.DateTimeField(auto_now_add=True) # when this extra created
    update_at = models.DateTimeField(auto_now_add=True) # when this extra updated
    priority_list = ((1,"Normal"),(2,"Urgent"))
    priority = models.CharField(choices=priority_list,default=1,max_length=30) 
    quantity = models.IntegerField(default=1)

class ExtraShiftsOrder(models.Model):
    id = models.AutoField(primary_key=True)
    dealer_id = models.ForeignKey(Dealers,on_delete=models.DO_NOTHING,null=True)
    create_at = models.DateTimeField(auto_now_add=True) # when this extra was take it

    






# future : WHEN user add cancleSHift automaticly raise on an Extra !

    # only staff can add an EXTRA ( managers and Live supports)
    # 
    # check if users have an Extra could be take it
    # after take an extra counter ++
    # dealer can take only one of the ONE Extra
     