from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

def home(request):
    return HttpResponse("I am home");