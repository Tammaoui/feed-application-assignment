from django.urls import path

from . import views

urlpatterns = [
    path('polls', views.polls),
    path('hello-world', views.hello_world)
]
