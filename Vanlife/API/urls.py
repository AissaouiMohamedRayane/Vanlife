from django.urls import path
from . import views

urlpatterns = [
    path('api/users', views.get_users, name='users'),
    path('api/login', views.login_view, name='login'),
]