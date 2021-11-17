from django.urls import path

from . import views

urlpatterns = [
    path('polls', views.polls),
    path('polls/<int:id>', views.get_single_poll),
    path('hello-world', views.hello_world)
]
