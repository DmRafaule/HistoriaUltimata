from django.urls import path
from . import views as V

urlpatterns = [
    path('', V.home, name='home'),
]