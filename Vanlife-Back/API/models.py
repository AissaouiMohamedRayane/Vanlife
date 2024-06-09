from typing import Any
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone
from django.core.validators import MinValueValidator, MaxValueValidator
from random import randint



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
    
    def get_comments_number(self):
        return self.my_comments.count()
    
    def __str__(self):
        return f"{self.user_name}"
    
    
class Van (models.Model):
    #class variabules
    all_id = []
    
    @classmethod
    def generate_id(cls: object) -> int:
        random = randint(100000, 1000000000)
        if random in Van.all_id:
            return Van.generate_id()
        return random
    
    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.__my_id = Van.generate_id()
        Van.all_id.append(self.__my_id)
        
    TYPE_CHOICES = [
        ('simple', 'Simple'),
        ('rugged', 'Rugged'),
        ('luxury', 'Luxury'),
    ]
    #instences
    user = models.ForeignKey( NewUser, on_delete=models.CASCADE, related_name="my_vans")
    name = models.CharField(_("van name"), max_length=50, unique=True)
    price = models.FloatField(_("van price"))
    image = models.ImageField(_("van image"), upload_to="images/", height_field=None, width_field=None, max_length=None, blank=True, default="images/van.png")
    type = models.CharField(_("van type"), max_length=20, choices=TYPE_CHOICES)
    description = models.CharField(_("van description"), max_length=200, blank=True, default="vans description")
    date_added = models.DateField(default=timezone.now)
    @property
    def my_id(self):
        return self.__my_id
    
    def __str__(self):
        return f"{self.pk}: {self.user.user_name} : {self.name} {self.price}"

    
class Comment (models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, blank=False, related_name='my_comments')
    van = models.ForeignKey(Van, on_delete = models.CASCADE, blank=True, related_name='van_comments')
    review = models.IntegerField(_("review"), validators=[
        MinValueValidator(0),
        MaxValueValidator(5)
    ])
    text = models.CharField(_("comment text"), max_length=200, blank=False)
    date_added = models.DateField(default=timezone.now)
    
        
    def __str__(self) -> str:
        return f"{self.user.user_name} : {self.van}"
