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


class Property(models.Model):
    location = models.CharField(max_length=100, default="")
    price = models.CharField(max_length=50, default=0)
    description = models.CharField(max_length=200, default="")
    contact = models.CharField(max_length=50, default=0)
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