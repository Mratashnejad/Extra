from django.contrib import admin
from django.urls import path, include
from backend.src.articles.api.views import *

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('rest-auth/facebook/', FacebookLogin.as_view()),
    path('rest-auth/google/', GoogleLogin.as_view()),
    path('rest-auth/instagram/',InstagramLogin.as_view()),
    
    path('api/',include('articles.api.urls')),
]
