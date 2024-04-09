from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import RegisterForm, Register_as_Landlord
from .models import MyUser, Property
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.core.files.storage import FileSystemStorage

def index(request):
    return render(request, 'Api/index.html')

def login(request):
    return render(request, 'login.html')


class SignUpView(CreateView):
    form_class = RegisterForm
    success_url = reverse_lazy("login")
    template_name = "api/signup.html"

"""def landlord(request):
    return  render(request, 'Api/landlord.html')"""

@login_required
def dashboard(request):
    user_profile = request.user
    args = {}
    if user_profile.user_type == MyUser.Landlord:
        args["properties"] = Property.objects.all()
        return render(request, 'Api/landlord.html', args)
    elif user_profile.user_type == MyUser.Tenant:
        return render(request, 'Api/tenant.html')
    else:
        # Handle other cases or raise an error
        pass

class LandlordSignup(CreateView):
    form_class = Register_as_Landlord
    success_url = reverse_lazy("login")
    template_name = "api/landlord_signup.html"

def tenant(request):
    return render(request, 'Api/tenant.html')

def add_property(request):
    if request.method == 'POST':
        # Get form data
        location = request.POST['location']
        price = request.POST['price']
        description = request.POST['description']
        contact = request.POST['contact']
        property_type = request.POST['property_type']
        image = request.FILES['image']

        # Save the image
        fs = FileSystemStorage()  # Use default file storage
        image_filename = fs.save(image.name, image)
        image_url = fs.url(image_filename)

        try:
            # Create a new Property object
            property = Property(
                location=location,
                price=price,
                description=description,
                contact=contact,
                property_type=property_type,
                image=image_url
            )
            property.save()
        except IntegrityError:
            # Handle database errors (e.g., duplicate entries)
            return render(request, 'error_page.html')
        else:
            return redirect('dashboard')  # Redirect to success page
    else:
        # Render the form (GET request)
        return render(request, 'Api/landlord.html')
