from django.conf.urls import url
from django.urls import path

from . import views

app_name = 'Extra'

urlpatterns = [
    url(r'^extra/$',views.ExtraMembers)
]
