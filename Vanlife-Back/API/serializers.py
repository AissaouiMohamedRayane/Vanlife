from rest_framework import serializers
from .models import NewUser, Van

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ["email", "first_name", "password", "id"]
        
class VanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Van
        fields ="__all__"