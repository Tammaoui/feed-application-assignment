from django.urls import path
from . import views


from django.urls import path, re_path
from . import views

urlpatterns = [
    path('register/', views.register),
]

index = [re_path(r'^(?:.*)/?$', views.index, name="index"), ]

urlpatterns += index
