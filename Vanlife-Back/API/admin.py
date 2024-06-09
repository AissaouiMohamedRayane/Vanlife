from django.contrib import admin

from .models import  NewUser, Van, Comment

admin.site.register(NewUser)
admin.site.register(Van)
admin.site.register(Comment)
