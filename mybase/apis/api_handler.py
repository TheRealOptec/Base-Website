from django.http import JsonResponse
import requests as reqs
from .news_api import NewsApi

class ApiHandler:
    API_GET_REQ_TYPE = "api"

    api_interfaces = {
        "news": NewsApi()
    }

    @staticmethod
    def handleReq(request):
        # Log API request
        # Gotten from https://stackoverflow.com/questions/150505/how-to-get-get-request-values-in-django
        apiReqType = request.GET.get(ApiHandler.API_GET_REQ_TYPE, None)
        if apiReqType is None:
            print(f"No api request type given")
            return JsonResponse({})
        # Test vvv
        response = reqs.get(ApiHandler.api_interfaces[apiReqType].getUrl(request.GET.dict()), params=request.GET.dict())
        return JsonResponse(response.json())
