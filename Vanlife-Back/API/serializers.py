from rest_framework import serializers
from .models import NewUser, Van, Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = "__all__"
        
class VanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Van
        fields ="__all__"
        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["review", "text", "date_added"]
        
