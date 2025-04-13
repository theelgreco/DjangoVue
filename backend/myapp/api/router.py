from rest_framework_extensions.routers import ExtendedSimpleRouter

api_router = ExtendedSimpleRouter()
api_router.trailing_slash = "/?"