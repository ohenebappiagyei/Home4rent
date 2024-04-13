from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.views import LogoutView, LoginView


urlpatterns = [
    path ("", views.index, name="index"),
    # path ("login/", views.login, name= "login"),
    path("signup/", views.SignUpView.as_view(), name="signup"),
    path("landlord/", views.LandlordSignup.as_view(), name="landlord"),
    path("dashboard/", views.dashboard,  name='dashboard'),
    # path('dashboard/', views.dashboard, name='dashboard'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path("tenant/", views.tenant,  name='tenant'),
    path("add-property/", views.add_property,  name='add-property'),
    # path("property-search/", views.property_search,  name='property-search'),
    # path("search-form/", views.search_form, name="search_form"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)