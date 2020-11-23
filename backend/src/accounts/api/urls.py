from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('api/', include('Extra.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    #path('rest-auth/facebook/', FacebookLogin.as_view(),name='fb_login'),
    # path('rest-auth/google/', GoogleLogin.as_view(),name='google_login'),
    # path('rest-auth/instagram/',InstagramLogin.as_view(),name='insta_login'),
    
]


# urlpatterns = [
   
#     url(r'^rest-auth/', include('rest_auth.urls')),
#     url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
#     url(r'^account/', include('allauth.urls')),
#     url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),
# ]