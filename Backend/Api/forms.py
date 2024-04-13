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

class PropertyForm(forms.Form):
    name = forms.CharField(label="Property Owner", max_length=100)

class SearchForm(forms.Form):
    LOCATION_CHOICES = [
        ("Adabraka", "Adabraka"),
        ("Airport Residential Area", "Airport Residential Area"),
        ("Cantonments", "Cantonments"),
        ("Dansoman", "Dansoman"),
        ("Dzorwulu", "Dzorwulu"),
        ("East Legon", "East Legon"),
        ("Haatso", "Haatso"),
        ("Kaneshie", "Kaneshie"),
        ("Labadi", "Labadi"),
        ("Madina", "Madina"),
        ("Mamprobi", "Mamprobi"),
        ("Nima", "Nima"),
        ("North Ridge", "North Ridge"),
        ("Osu", "Osu"),
        ("Ridge", "Ridge"),
        ("Sakumono", "Sakumono"),
        ("Spintex", "Spintex"),
        ("Tema", "Tema"),
        ("Teshie", "Teshie"),
        ("West Legon", "West Legon")
    ]

    query_budget = forms.CharField(label='Budget', required=False)
    query_location = forms.ChoiceField (label='Location', choices=LOCATION_CHOICES, required=False)
    query_type = forms.CharField(label='Room Type', required=False)