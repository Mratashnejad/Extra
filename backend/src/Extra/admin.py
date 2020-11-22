from django.contrib import admin
from django.db import models
from .models import CustomUser, Manager,Shift,Extra,ExtraOrder,InfoCustomUser



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

# class adminDealer(admin.ModelAdmin):
#     list_display = ['user','shiftDate','shiftManager','language','extraCounter','cancelCounter','status']
#     list_display_links =['user']


# class AdminLiveSupport(admin.ModelAdmin):
#     list_display = ['user','shiftDate','shiftManager','extraCounter','cancelCounter','status']
#     list_display_links =['user']


# class AdminFloorManager(admin.ModelAdmin):
#     list_display = ['user','shiftDate','shiftManager','extraCounter','cancelCounter','status']


# class AdminShuffler(admin.ModelAdmin):
#     list_display = ['user','shiftDate','shiftManager','extraCounter','cancelCounter','status']
#     list_display_links =['user']
class adminInfoCustomUser(admin.ModelAdmin):
    list_display =['user','shiftDate','extraCounter','cancelCounter','status','shift']

class AdminShift(admin.ModelAdmin):
    list_display =['shiftManager','line','language']
    # list_display_links =['dealer','liveSupport','floorManager','shuffler']

class AdminExtra(admin.ModelAdmin):
    list_display = ['title','label','date','quantity']
class adminExtraOrder(admin.ModelAdmin):
    list_display = ['ExtraName' , 'OrderDate']
    



admin.site.register(CustomUser,CustomUseradmin)
admin.site.register(Manager,adminManager)
# admin.site.register(Dealer,adminDealer)
# admin.site.register(LiveSupport,AdminLiveSupport)
# admin.site.register(FloorManager,AdminFloorManager)
# admin.site.register(Shuffler,AdminShuffler)
admin.site.register(InfoCustomUser,adminInfoCustomUser)
admin.site.register(Shift,AdminShift)
admin.site.register(Extra,AdminExtra)
admin.site.register(ExtraOrder,adminExtraOrder)

