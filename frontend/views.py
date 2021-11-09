from django.shortcuts import render
from accounts.forms import RegisterForm, LoginForm


def index(request):
    if request.user.is_authenticated:
        return render(request, 'frontend/index.html')
    return render(request, 'registration/login.html', {'form': LoginForm})


def register(request):
    return render(request, 'registration/register.html', {'form': RegisterForm})
