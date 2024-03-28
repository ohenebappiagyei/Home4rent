from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import RegisterForm
from .models import MyUser
from django.urls import reverse_lazy
from django.views.generic import CreateView

def index(request):
    return render(request, 'Api/index.html')

def login(request):
    return render(request, 'login.html')

class SignUpView(CreateView):
    form_class = RegisterForm
    success_url = reverse_lazy("login")
    template_name = "api/signup.html"