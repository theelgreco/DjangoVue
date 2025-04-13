from drf_spectacular.views import SpectacularRedocView


class CustomSpectacularRedocView(SpectacularRedocView):
    template_name = 'schema/redoc.html'
