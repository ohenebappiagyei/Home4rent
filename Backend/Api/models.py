from django.db import models
from django.contrib.auth.models import AbstractUser

class Property(models.Model):
    name = models.CharField(max_length=50)
    property_type = models.CharField(max_length=50)
    gps_location = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    number_of_rooms = models.CharField(max_length=50)
    water_availability = models.CharField(max_length=50)
    electricity_availability = models.CharField(max_length=50)
    bathroom_availability = models.CharField(max_length=50)
    kitchen_availability = models.CharField(max_length=50)
    pictures = models.ImageField()
    price = models.CharField(max_length=50)
    review = models.CharField(max_length=200)
    duration = models.CharField(max_length=50)
    rent_status = models.BooleanField(max_length=50)

class MyUser(AbstractUser):
    ghcard = models.CharField(max_length=50)

    def __str__(self):
        return self.username