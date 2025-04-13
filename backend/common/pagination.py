from rest_framework.pagination import PageNumberPagination


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20
    max_page_size = 40
    page_size_query_param = 'page_size'
    page_query_param = 'pg'
