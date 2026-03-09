from django.shortcuts import render, redirect
from django.conf import settings

def index(request):
    context_dict = {
        "react_app_source": settings.REACT_MAIN_PATH
    }
    return render(request, 'mybase/base.html', context=context_dict)
