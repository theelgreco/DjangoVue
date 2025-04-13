from django.views.generic import TemplateView


class VueTemplateView(TemplateView):
    template_name = "vue.html"


class WelcomeView(VueTemplateView):
    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)

        context_data["page_title"] = "Welcome"
        context_data["vite_asset_name"] = "src/pages/welcome/Welcome.ts"

        return context_data
