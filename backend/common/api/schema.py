from drf_spectacular.openapi import AutoSchema
from drf_spectacular.utils import extend_schema_serializer, OpenApiExample
from rest_framework import serializers


class ErrorDetailSerializer(serializers.Serializer):
    code = serializers.CharField(help_text="An error code linked to a specific error.")
    detail = serializers.CharField(help_text="A verbose error message to show to the user.")
    attr = serializers.CharField(help_text="The field the error relates to.")


class ValidationErrorSerializer(serializers.Serializer):
    type = serializers.CharField(default="validation_error", help_text="Type of error")
    errors = ErrorDetailSerializer(many=True, help_text="A list errors.")


@extend_schema_serializer(
    examples=[
        OpenApiExample(
            'Not Found Error Example',
            value={
                "type": "client_error",
                "errors": [
                    {
                        "code": "not_found",
                        "detail": "Not found.",
                        "attr": None
                    }
                ]
            },
            request_only=False,  # ensure this is set correctly for response or request
            response_only=True  # since this example is likely for a response
        )
    ]
)
class UnauthenticatedErrorSerializer(ValidationErrorSerializer):
    type = serializers.CharField(default="client_error")


@extend_schema_serializer(
    examples=[
        OpenApiExample(
            'Not Found Error Example',
            value={
                "type": "client_error",
                "errors": [
                    {
                        "code": "not_found",
                        "detail": "Not found.",
                        "attr": None
                    }
                ]
            },
            request_only=False,  # ensure this is set correctly for response or request
            response_only=True  # since this example is likely for a response
        )
    ]
)
class ForbiddenErrorSerializer(ValidationErrorSerializer):
    type = serializers.CharField(default="client_error")


@extend_schema_serializer(
    examples=[
        OpenApiExample(
            'Not Found Error Example',
            value={
                "type": "client_error",
                "errors": [
                    {
                        "code": "not_found",
                        "detail": "Not found.",
                        "attr": None
                    }
                ]
            },
            request_only=False,  # ensure this is set correctly for response or request
            response_only=True  # since this example is likely for a response
        )
    ]
)
class NotFoundErrorSerializer(ValidationErrorSerializer):
    type = serializers.CharField(default="client_error")


class SchemaGenerator(AutoSchema):

    def _get_response_bodies(self, *args, **kwargs):
        response_bodies = super()._get_response_bodies(*args, **kwargs)
        if len(list(filter(lambda _: _.startswith('4'), response_bodies.keys()))):
            return response_bodies

        add_error_codes = []
        if not self.method == 'GET':
            add_error_codes.append('400')

        if self.get_auth():
            add_error_codes.append('401')
            add_error_codes.append('403')

        if (
                not (self.method == 'GET' and self._is_list_view()) and
                len(list(filter(lambda _: _['in'] == 'path', self._get_parameters())))
        ):
            add_error_codes.append('404')

        self.error_response_bodies = {
            '400': self._get_response_for_code(ValidationErrorSerializer, '400'),
            '401': self._get_response_for_code(UnauthenticatedErrorSerializer, '401'),
            '403': self._get_response_for_code(ForbiddenErrorSerializer, '403'),
            '404': self._get_response_for_code(NotFoundErrorSerializer, '404')
        }
        for code in add_error_codes:
            response_bodies[code] = self.error_response_bodies[code]
        return response_bodies
