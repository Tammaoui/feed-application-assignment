from django.urls import path
from . import views


from django.urls import path, re_path
from . import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
    path('', views.index, name="index")
]
