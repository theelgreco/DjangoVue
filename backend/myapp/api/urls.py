from django.urls import re_path, include, path
from drf_spectacular.views import SpectacularAPIView

from myapp.api.router import api_router
from myapp.schema_views import CustomSpectacularRedocView

app_name = "api"

doc_urls = [
    re_path(
        r"^documentation/$", CustomSpectacularRedocView.as_view(url_name="api:schema"),
        name='documentation'
    ),
    re_path(r'^schema/', include([
        path('', SpectacularAPIView.as_view(), name='schema'),
    ])),
]

# Register API routes here: api_router.register...

urlpatterns = doc_urls + api_router.urls
