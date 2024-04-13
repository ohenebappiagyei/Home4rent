from django.db import models
from django.contrib.auth.models import AbstractUser



# class Property(models.Model):
#     name = models.CharField(max_length=50)
#     property_type = models.CharField(max_length=50)
#     gps_location = models.CharField(max_length=50)
#     location = models.CharField(max_length=50)
#     number_of_rooms = models.CharField(max_length=50)
#     water_availability = models.CharField(max_length=50)
#     electricity_availability = models.CharField(max_length=50)
#     bathroom_availability = models.CharField(max_length=50)
#     kitchen_availability = models.CharField(max_length=50)
#     pictures = models.ImageField()
#     price = models.CharField(max_length=50)

location_choices = [
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


class Property(models.Model):
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

    name = models.CharField(max_length=100, default="")
    location = models.CharField(max_length=100, choices=LOCATION_CHOICES)
    price = models.CharField(max_length=50, default=0)
    description = models.CharField(max_length=200, default="")
    contact = models.CharField(max_length=50, default=0)
    property_type = models.CharField(max_length=100, default="")
    image = models.ImageField()

    def __str__(self):
        return self.location


class MyUser(AbstractUser):
    Tenant = "TT"
    Landlord = "LL"
    ACCOUNT_CHOICES = [
    ("LL", "Landlord"),
    ("TT", "Tenant")
]
    ghcard = models.CharField(max_length=50)
    user_type = models.CharField(choices=ACCOUNT_CHOICES, max_length=50, default=Tenant)

    def __str__(self):
        return self.username