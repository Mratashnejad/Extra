from django.contrib import admin
from django.db import models
from .models import  Languages , Managers,Staffs,Shifts,Dealers,FloorManagers,Shufflers,ExtraShifts,ExtraShiftsOrder
from accounts.models import CustomUser

class CustomUseradmin(admin.ModelAdmin):
    list_display = ['username','phonenumber','email','first_name','last_name','position','gender',
    ]
    list_filter =['position']  # filter by is admin - is staff ...
    search_fields=['email','phonenumber','position','first_name','last_name','gender'] # search by email on admin pannle

class adminManagers(admin.ModelAdmin):
    list_display =['id','user','create_at','update_at','objects',]

class adminLanguages(admin.ModelAdmin):
    list_display=['id','Language_name']

class adminStaffs(admin.ModelAdmin):
    list_display=['id','user','language_id','create_at','update_at','fcm_token','objects']

class adminShifts(admin.ModelAdmin):
    list_display=['id','shift_name','language_id','manager_id','staff_id',]

class adminDealers(admin.ModelAdmin):
    list_display=['id','user','language_id','shift_id','create_at','update_at','fcm_token','objects',]

class adminFloorManagers(admin.ModelAdmin):
    list_display=['id','user','language_id','shift_id','create_at','update_at','fcm_token','objects',]

class adminShufflers(admin.ModelAdmin):
    list_display=['id','user','shift_id','create_at','update_at','fcm_token','objects',]

class adminExtraShifts(admin.ModelAdmin):
    list_display=['id','shift_id','language_id','ExtraShift_Date','ExtraShift_Time','create_at','update_at','priority','quantity',]

class adminExtraShiftsOrder(admin.ModelAdmin):
    list_display=['id','dealer_id','extraShift_id','create_at']


admin.site.register(CustomUser,CustomUseradmin)
admin.site.register(Languages,adminLanguages)
admin.site.register(Managers,adminManagers)
admin.site.register(Staffs,adminStaffs)
admin.site.register(Shifts,adminShifts)
admin.site.register(Dealers,adminDealers)
admin.site.register(FloorManagers,adminFloorManagers)
admin.site.register(Shufflers,adminShufflers)
admin.site.register(ExtraShifts,adminExtraShifts)
admin.site.register(ExtraShiftsOrder,adminExtraShiftsOrder)
