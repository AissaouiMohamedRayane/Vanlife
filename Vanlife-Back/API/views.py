from django.shortcuts import render
from json import loads
from .serializers import UserSerializer, VanSerializer
from .models import NewUser, Van
from django.http import JsonResponse
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required



from django.contrib.auth import authenticate, login,  logout


def login_view(request):
    if request.method == "POST":
        data = loads(request.body)
        email = data.get('email')
        password = data.get('password')
        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            response = JsonResponse({"res" : True}, status=200)
            return response
        else:
            return JsonResponse({"error" : False}, status=400)
    else:
        return JsonResponse({"error" : 'wrong request'}, status=400)


def logout_view(request):
    logout(request)
    return JsonResponse({"res" : "loged out"}, status = 200)

@csrf_exempt
def register(request):
    if request.method != 'POST':
        return JsonResponse({'res': 'Wrong request'}, status = 400)
    data = loads(request.body)
    email = data.get('email')
    user_name = data.get('username')
    password = data.get('password')
    try:
        user = NewUser.objects.create_user(email = email, user_name = user_name, password = password)
        user.save()
    except IntegrityError as e:
        return JsonResponse({'error' : f"{e}"}, status = 400)
    login(request, user)
    return JsonResponse({'res' : 'registerd succesfully'}, status = 200)
        
    
def get_all_vans (request):
    vans = Van.objects.all()
    serialized_vans = VanSerializer(vans, many = True)
    return JsonResponse({"vans" : serialized_vans.data})

@csrf_exempt
def get_my_vans (request):
  
    vans = Van.objects.filter(user = request.user)
    serialized_vans = VanSerializer(vans, many = True)
    return JsonResponse({"vans" : serialized_vans.data})

@login_required
@csrf_exempt
def add_van (request):
    if request.method != 'POST':
        return JsonResponse({'error' : 'wrong request'}, status = 400)
    data = loads(request.body)
    user = request.user
    name = data.get('name')
    price = data.get('price')
    image = data.get('image')
    type = data.get('type')
    description = request.get('description')
    try:
        van = Van(user = user, name = name, price = price, image = image, type = type, description = description)
        van.save()
    except IntegrityError as e:
        return JsonResponse({'error' : f"{e}"})
    return JsonResponse({'res' : 'van added succesfully'})
    
@login_required
@csrf_exempt
def delete_van (request, van_id = None):
    if request.method != 'DELETE':
        return JsonResponse({'error' : 'wrong request'}, status = 400)
    van = Van.objects.get(pk = van_id)
    if van:
        van.delete()
        return JsonResponse({'res' : 'Deleted succesfully'}, status = 200)
    return JsonResponse({'error' : 'no Van with these id'}, status = 404)
@login_required
@csrf_exempt
def modify_van(request, van_id = None):
    if(request.method != 'PUT'):
        return JsonResponse({'error' : 'Wrong request'}, status = 400)
    van = Van.objects.get(pk = van_id)
    if van:
        data = loads(request.body)
        name = data.get('name')
        price = data.get('price')
        image = data.get('image')
        type = data.get('type')
        description = request.get('description')
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
        return JsonResponse({'res' : 'van modified succesfully'}, status = 200)
    return JsonResponse({'error' : 'no van with this id'}, status = 404)