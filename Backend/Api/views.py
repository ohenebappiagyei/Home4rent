from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

def home(request):
    return render(request, 'api/index.html')

def login(request):
    return render(request, 'api/login.html')

def signup(request):
    return render(request, 'api/signup.html')