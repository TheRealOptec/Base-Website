from django.http import JsonResponse
import requests as reqs
from .news_api import NewsApi

class ApiHandler:
    API_GET_REQ_TYPE = "api"
    API_STATUS_KEY = "mybase_api_status"

    api_interfaces = {
        "news": NewsApi()
    }

    @staticmethod
    def createFailureJson(code):
        json = dict()
        json[ApiHandler.API_STATUS_KEY] = code
        return json

    @staticmethod
    def createSuccessJson(response):
        json = response.json()
        json[ApiHandler.API_STATUS_KEY] = 0
        return json

    @staticmethod
    def handleReq(request):
        # Log API request
        # Gotten from https://stackoverflow.com/questions/150505/how-to-get-get-request-values-in-django
        apiReqType = request.GET.get(ApiHandler.API_GET_REQ_TYPE, None)
        if apiReqType is None:
            print(f"No api request type given")
            return JsonResponse(ApiHandler.createFailureJson(1))
        # Test vvv
        api_interface = ApiHandler.api_interfaces[apiReqType]
        print(f"GET: {request.GET.dict()}")
        response = reqs.get(api_interface.getUrl(request.GET.dict()), params=request.GET.dict())
        status = api_interface.checkStatus(response)
        if not status:
            # Just for logging
            print(f"Api request failed: {response.json()}")
            return JsonResponse(ApiHandler.createFailureJson(1))
        return JsonResponse(ApiHandler.createSuccessJson(response))
