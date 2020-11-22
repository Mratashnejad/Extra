from django.contrib import admin
from django.db import models
from .models import CustomUser, Manager, Dealer ,LiveSupport , FloorManager, Shuffler , Shift




class CustomUseradmin(admin.ModelAdmin):
    list_display = [
        'phonenumber',
        'email',
        'first_name',
        'last_name',
        'position',
        'gender',
    ]
    list_filter =['position']  # filter by is admin - is staff ...
    search_fields=['email','phonenumber','position','first_name','last_name','gender'] # search by email on admin pannle

class adminManager(admin.ModelAdmin):
    list_display =['user','managerTitle']

class adminDealer(admin.ModelAdmin):
    list_display = ['user','shiftDate','shiftManager','language','extraCounter','cancelCounter','status']
    list_display_links =['user']


class AdminLiveSupport(admin.ModelAdmin):
    list_display = ['user','shiftDate','shiftManager','extraCounter','cancelCounter','status']
    list_display_links =['user']


class AdminFloorManager(admin.ModelAdmin):
    list_display = ['user','shiftDate','shiftManager','extraCounter','cancelCounter','status']


class AdminShuffler(admin.ModelAdmin):
    list_display = ['user','shiftDate','shiftManager','extraCounter','cancelCounter','status']
    list_display_links =['user']


class AdminShift(admin.ModelAdmin):
    list_display =['title', 'manager','line','language']
    # list_display_links =['dealer','liveSupport','floorManager','shuffler']






admin.site.register(CustomUser,CustomUseradmin)
admin.site.register(Manager,adminManager)
admin.site.register(Dealer,adminDealer)
admin.site.register(LiveSupport,AdminLiveSupport)
admin.site.register(FloorManager,AdminFloorManager)
admin.site.register(Shuffler,AdminShuffler)
admin.site.register(Shift,AdminShift)

