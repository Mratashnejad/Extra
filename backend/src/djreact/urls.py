from django.contrib import admin
from django.urls import path, include
from articles.api.views import FacebookLogin , GoogleLogin , InstagramLogin

urlpatterns = [
 
    path('admin/', admin.site.urls),
    path('api/', include('articles.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(),name='fb_login'),
    path('rest-auth/google/', GoogleLogin.as_view(),name='google_login'),
    path('rest-auth/instagram/',InstagramLogin.as_view(),name='insta_login'),
    
]
