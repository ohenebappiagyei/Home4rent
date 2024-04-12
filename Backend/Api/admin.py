from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import MyUser, Property

admin.site.register(MyUser)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price')
    search_fields = ['name']
admin.site.register(Property, PropertyAdmin)