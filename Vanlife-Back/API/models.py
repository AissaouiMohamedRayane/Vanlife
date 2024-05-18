from typing import Any
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone


class CustomAccountManager (BaseUserManager):
    def create_user(self, email, user_name, password= None, **other_fields):
        if not email:
            raise ValueError(_("You must provied an email addres"))
        email = self.normalize_email(email)
        user = self.model(email = email, user_name = user_name, **other_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, user_name, password=None, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_superuser', True)
        
        return self.create_user(email, user_name, password, **other_fields)

class NewUser (AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"), max_length=100, unique=True)
    user_name = models.CharField(_("username"), max_length=50, unique=True)
    image = models.ImageField(_("user image"), upload_to='images/', height_field=None, width_field=None, max_length=None, blank=True)
    date_joined = models.DateField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = CustomAccountManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']
    
    def __str__(self):
        return f"{self.user_name}"
    
class Van (models.Model):
    TYPE_CHOICES = [
        ('simple', 'Simple'),
        ('rugged', 'Rugged'),
        ('luxury', 'Luxury'),
    ]
    user = models.ForeignKey( NewUser, on_delete=models.CASCADE)
    name = models.CharField(_("van name"), max_length=50, unique=True)
    price = models.FloatField(_("van price"))
    image = models.ImageField(_("van image"), upload_to="images/", height_field=None, width_field=None, max_length=None, blank=True, default="images/van.png")
    type = models.CharField(_("van type"), max_length=20, choices=TYPE_CHOICES)
    description = models.CharField(_("van description"), max_length=200, blank=True, default="vans description")
    date_added = models.DateField(default=timezone.now)

    
    def __str__(self) -> str:
        return f"{self.user.user_name} : {self.name} {self.type} {self.price}$"
