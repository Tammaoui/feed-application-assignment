from django.shortcuts import redirect, render
from accounts.forms import RegisterForm, LoginForm
from django.contrib.auth import authenticate, login as login_user
from django.contrib.auth import get_user_model


def index(request):
    if request.user.is_authenticated:
        return render(request, 'frontend/index.html')
    return login(request)


def login(request):
    if request.user.is_authenticated:
        return render(request, 'frontend/index.html')

    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login_user(request, user)
            redirect("/")
    return render(request, 'registration/login.html', {'form': LoginForm})


def register(request):
    if request.user.is_authenticated:
        return render(request, 'frontend/index.html')

    if request.method == "POST":
        email = request.POST['email']
        try:
            u = get_user_model().objects.get(email=email)
        except get_user_model().DoesNotExist:
            u = None

        if u is None:
            password = request.POST['password']
            user = get_user_model().objects.create_user(email=email, password=password)
            login_user(request, user)
            redirect("/")

    return render(request, 'registration/register.html', {'form': RegisterForm})
