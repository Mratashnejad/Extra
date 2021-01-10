
from cassino.api.views import ExtrashiftView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'',ExtrashiftView,basename='Extra')
urlpatterns = router.urls

