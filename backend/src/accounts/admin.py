from django.contrib import admin

from .models import CustomUser


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
admin.site.register(CustomUser,CustomUseradmin)