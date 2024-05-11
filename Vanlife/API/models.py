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
    first_name = models.CharField(_("first name"), max_length=50, blank= True)
    test = models.CharField(_("test"), max_length=50, blank= True)
    date_joined = models.DateField(default=timezone.now)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = CustomAccountManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']
    
    def __str__(self):
        return f"{self.user_name}"