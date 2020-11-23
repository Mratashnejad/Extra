# from rest_framework import viewsets
# from articles.models import Article
# from .serializes import ArticleSerializer
# from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from allauth.socialaccount.providers.instagram.views import InstagramOAuth2Adapter
# from rest_auth.registration.views import SocialLoginView


# #user managmant
# class FacebookLogin(SocialLoginView):
#     adapter_class = FacebookOAuth2Adapter
# class GoogleLogin(SocialLoginView):
#     adapter_class = GoogleOAuth2Adapter
# class InstagramLogin(SocialLoginView):
#     adapter_class = InstagramOAuth2Adapter


# #date managment
# class ArticleViewSet (viewsets.ModelViewSet):
#     serializer_class = ArticleSerializer
#     queryset = Article.objects.all()