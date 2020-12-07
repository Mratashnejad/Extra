from django.contrib import admin
from django.urls import path, include
from .views import (UserIDView,ExtraShiftListView)


urlpatterns = [
    path('user-id/',UserIDView.as_view(),name='user-id'),
    path('extra/',ExtraShiftListView.as_view(),name='extra-list')
    
    # path('api/', include('articles.api.urls')),
    # path('rest-auth/', include('rest_auth.urls')),
    # path('api-auth/', include('rest_framework.urls')),
]
