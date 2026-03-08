from django.urls import path
from mybase import views

app_name = 'mybase'

urlpatterns = [
    path('', views.index, name='index'),
]