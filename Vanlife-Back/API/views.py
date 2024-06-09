from .serializers import UserSerializer, VanSerializer, CommentSerializer
from .models import NewUser, Van, Comment

from django.db import IntegrityError
from json import loads
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login,  logout

# @csrf_exempt
@api_view(['POST'])
def login_view(request):
    data = loads(request.body)
    email = data.get('email')
    password = data.get('password')
    user = authenticate(request, email=email, password=password)
    if user is not None:
        login(request, user)
        return  Response({"res" : True}, status=200)
    else:
        return Response({"error" : False}, status=400)

    
@login_required
@api_view(['GET'])
def logout_view(request):
    logout(request)
    return Response({"res" : True}, status = 200)

# @csrf_exempt
@api_view(['POST'])
def register(request):
    data = loads(request.body)
    email = data.get('email')
    user_name = data.get('username')
    password = data.get('password')
    try:
        user = NewUser.objects.create_user(email = email, user_name = user_name, password = password)
        user.save()
    except IntegrityError as e:
        return Response({'error' : f"{e}"}, status = 400)
    login(request, user)
    return Response({'res' : 'registerd succesfully'}, status = 200)


@api_view(['GET'])
@login_required
def get_user_info(request):
    info = request.query_params.get('info', None)
    if info:
        user = [request.user,]
        serializer = UserSerializer(user, many = True)
        serialized_user = serializer.data[0]
        item = serialized_user[info]
        return Response({'userImage' : item}, status = 200)
    else:
        return Response({'error':'there is no field with these name'}, status = 404)        


class ListVans(generics.ListAPIView):
    queryset = Van.objects.all()
    serializer_class = VanSerializer
list_vans_view = ListVans.as_view()


class ListMyVans(LoginRequiredMixin, generics.ListAPIView):
    serializer_class = VanSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Van.objects.filter(user=user)

list_my_vans_view = ListMyVans.as_view()

# @login_required
# @csrf_exempt
@api_view(['POST'])
def add_van (request):
    try:    
        data = loads(request.body)
    except:
        return Response({'hi':'Hi'}, status=400)
    serializer = VanSerializer(data = data)
    if serializer.is_valid(raise_exception=True):
        try:
            instance = serializer.save()
        except IntegrityError as e:
            return Response({'error' : f"{e}"})
    return Response({'res' : 'van added succesfully'})
    
@login_required
# @csrf_exempt
@api_view(['DELETE'])
def delete_van (request, van_id = None):
    van = Van.objects.get(pk = van_id)
    if van:
        van.delete()
        return Response({'res' : 'Deleted succesfully'}, status = 200)
    return Response({'error' : 'no Van with these id'}, status = 404)

@login_required
# @csrf_exempt
@api_view(['PUT'])
def modify_van(request, van_id = None):
    van = Van.objects.get(pk = van_id)
    if van:
        data = loads(request.body)
        name = data.get('name')
        price = data.get('price')
        image = data.get('image')
        type = data.get('type')
        description = data.get('description')
        if name is not None:
            van.name = name
        if price is not None:
            van.price = price
        if image is not None:
            van.image = image
        if type is not None:
            van.type = type
        if description is not None:
            van.description = description
        van.save()
        return Response({'res' : 'van modified succesfully'}, status = 200)
    return Response({'error' : 'no van with this id'}, status = 404)

@api_view(['GET'])
def van_comments(request):
    van_id = request.GET.get('van_id')
    if not van_id:
        return Response({"error": "van_id parameter is required"}, status=400)
    if request.method != 'GET':
        return Response({"error":"Bad request"}, status = 400)
    comments = Comment.objects.filter(van = van_id)
    if comments:
        serialized_comments = CommentSerializer(comments, many=True)
        return Response({"commnets":serialized_comments.data}, status = 200)
    return Response({"no_comments":"No comments"}, status=200)

@login_required
@api_view(['GET'])
def user_comments(request):
    comments = Comment.objects.filter(user = request.user)
    if comments:    
        serialized_comments = CommentSerializer(comments, many = True)
        return Response({"comments" : serialized_comments.data}, status = 200)
    return Response ({"no_comments" : "No comments"}, status=200)