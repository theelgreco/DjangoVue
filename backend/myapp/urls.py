from django.contrib import admin
from django.urls import path, include, re_path

from common.views import WelcomeView

urlpatterns = [
    path('', WelcomeView.as_view(), name='welcome'),
    re_path(r'^api/', include('myapp.api.urls')),
    path('admin/', admin.site.urls),
]
