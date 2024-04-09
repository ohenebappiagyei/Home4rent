from django.forms import ModelForm
from .models import MyUser, Property
from django.contrib.auth.forms import UserCreationForm
from django import forms

class RegisterForm(UserCreationForm):
    class Meta:
        model=MyUser
        fields = ['username','email','password1','password2','ghcard']

class Register_as_Landlord(UserCreationForm):
    class Meta:
        model=MyUser
        fields = ['username','email','password1','password2','ghcard', 'user_type']

class AddProperty:
    class Meta:
        model=Property
        fields = '__all__'