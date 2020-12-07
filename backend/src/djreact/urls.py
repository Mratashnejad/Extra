from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include , re_path
from rest_framework import routers




router = routers.DefaultRouter()



urlpatterns = [
 
    path('admin/', admin.site.urls),
    path('api/auth/',include('accounts.api.urls')),
    path('api/',include('cassino.api.urls'))
    
]
