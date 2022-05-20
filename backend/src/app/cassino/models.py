
from django.core.checks.messages import Error
from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.urls import reverse




ExtraLabelCategory=(
    ('Mo','Morning Shift'),
    ('Mi','Middle Shift'),
    ('Ni','Night Shiftt '),
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

    def __str__(self):
        return  self.Language_name



#Managers it means PITBOSS OR ADMIN SITE
class Managers(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.user


#Staffs it means LIVE SUPPORTS
class Staffs(models.Model):
    id= models.AutoField(primary_key=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.user

#shift more important
class Shifts(models.Model):
    id = models.AutoField(primary_key=True)
    shift_name = models.CharField(max_length=255)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    manager_id = models.ForeignKey(Managers,on_delete=models.CASCADE)
    staff_id = models.ForeignKey(Staffs,on_delete=models.CASCADE)

    def __unicode__(self):
        return self.shift_name

#Staffs who working on Tables of dealing cards /Dealer is first items of ONE SHIFT
class Dealers(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    shift_id = models.ForeignKey(Shifts,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)

    #profile_pic = models.ImageField()

    def __unicode__(self):
        return self.user

#people who manages Salons
class FloorManagers(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    shift_id = models.ForeignKey(Shifts,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)

    #profile_pic = models.ImageField()

    def __unicode__(self):
        return self.user

# #people who shuffles Cards
class Shufflers(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    shift_id = models.ForeignKey(Shifts,on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)

    #profile_pic = models.ImageField()


    def __unicode__(self):
        return self.user


class ExtraShifts(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    shift_id = models.ForeignKey(Shifts,on_delete=models.CASCADE)
    language_id = models.ForeignKey(Languages,on_delete=models.CASCADE)
    ExtraShift_Date = models.DateField() # which day ? thay need people to take an extra
    Time_List=(('now','NOW'),('10','10am to 6pm'),('6','6pm to 2am'),('2','2am to 10am'))
    ExtraShift_Time = models.CharField(choices=Time_List,max_length=50) # what time ?  thay need people to take an extra
    create_at = models.DateTimeField(auto_now_add=True) # when this extra created
    update_at = models.DateTimeField(auto_now_add=True) # when this extra updated
    priority_list=(("Normal","Normal"),("Urgent","Urgent"))
    priority = models.CharField(choices=priority_list,default='Normal',max_length=12)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return  self.title
    def get_absolute_url(self):
        return reverse("Extra", kwargs={"id": self.id})
    
 
 
class ExtraShiftsOrder(models.Model):
    id = models.AutoField(primary_key=True)
    shift = models.ForeignKey(ExtraShifts,on_delete=CASCADE)
    dealer = models.ForeignKey(Dealers,on_delete=models.CASCADE,null=True)
    create_at = models.DateTimeField(auto_now_add=True) # when this extra was take it
    ordered = models.BooleanField(default=False)


    def __int__(self):
        return self.id
  





# TODO : WHEN user add cancleSHift automaticly raise on an Extra !

    # only staff can add an EXTRA ( managers and Live supports)
    #
    # check if users have an Extra could be take it
    # after take an extra counter ++
    # dealer can take only one of the ONE Extra
