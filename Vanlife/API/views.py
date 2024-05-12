from django.shortcuts import render
from json import loads
from .serializers import CustomersSerializer
from .models import NewUser
from django.http import JsonResponse
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt


from django.contrib.auth import authenticate, logout

def get_users(request):
    users = NewUser.objects.all()
    serialized_user = CustomersSerializer(users, many = True)
    return JsonResponse({"users" : serialized_user.data[0]})

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = loads(request.body)
        email = data.get('email')
        password = data.get('password')
        user = authenticate(request, email=email, password=password)

        if user is not None:
            response = JsonResponse({"res" : True}, status=200)
            return response
        else:
            return JsonResponse({"res" : False}, status=300)
    else:
        return JsonResponse({"res" : 'wrong request'}, status=400)


def logout(request):
    pass
    # logout(request)
    # return HttpResponseRedirect(reverse("index"))


def register(request):
    pass    
    # if request.method == "POST":
    #     username = request.POST["email"]
    #     email = request.POST["username"] 

    #     # Ensure password matches confirmation
    #     password = request.POST["password"]
    #     confirmation = request.POST["confirmation"]
    #     if password != confirmation:
    #         return render(request, "network/register.html", {
    #             "message": "Passwords must match."
    #         })

    #     # Attempt to create new user
    #     try:
    #         user = User.objects.create_user(username, email, password)
    #         user.save()
    #     except IntegrityError:
    #         return render(request, "network/register.html", {
    #             "message": "Username already taken."
    #         })
    #     login(request, user)
    #     return HttpResponseRedirect(reverse("index"))
    # else:
    #     return render(request, "network/register.html")