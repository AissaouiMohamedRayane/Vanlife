from rest_framework import serializers
from .models import NewUser

class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ["email", "first_name", "password", "id"]