from django.forms import ModelForm
from .models import MyUser
from django.contrib.auth.forms import UserCreationForm

class RegisterForm(UserCreationForm):
    class Meta:
        model=MyUser
        fields = ['username','email','password1','password2', 'ghcard']