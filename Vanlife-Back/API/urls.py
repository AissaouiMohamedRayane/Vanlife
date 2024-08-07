from django.urls import path
from . import views


urlpatterns = [
    path('login', views.login_view, name='login'),
    path('logout', views.logout_view, name='logout'),
    path('register', views.register_view, name='register'),
    path('van/<int:pk>', views.detail_van),
    path('vans', views.list_add_van_view, name='vans'),
    path('user',views.get_user_info, name = 'user'),
    path('host/my_vans', views.list_my_vans_view, name='add_vans'),
    path('host/add_van', views.list_add_van_view, name='add_vans'),
    path('host/delete_van', views.delete_van, name='delete_vans'),
    path('host/modify_van/<int:pk>', views.modify_van_view, name='modify_vans'),
    path('host/comment/get_van_comments', views.van_comments, name='modify_vans'),
    path('host/comment/get_my_comments', views.user_comments, name='modify_vans'),
]