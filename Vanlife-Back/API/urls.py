from django.urls import path
from . import views


urlpatterns = [
    path('login', views.login_view, name='login'),
    path('logout', views.logout_view, name='logout'),
    path('register', views.register, name='register'),
    path('vans', views.get_all_vans, name='vans'),
    path('user',views.get_user_info, name = 'user'),
    path('host/my_vans', views.get_my_vans, name='my_vans'),
    path('host/add_van', views.add_van, name='add_vans'),
    path('host/delete_van', views.delete_van, name='delete_vans'),
    path('host/modify_van', views.modify_van, name='modify_vans'),
]