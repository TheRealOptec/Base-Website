from django.http import JsonResponse

class ApiHandler:
    @staticmethod
    def handleReq(request):
        # Log API request
        print("Handling API request")
        # Test vvv
        # Gotten from https://stackoverflow.com/questions/150505/how-to-get-get-request-values-in-django
        ret = dict()
        ret["test"] = request.GET.get('test', None)
        return JsonResponse(ret)
