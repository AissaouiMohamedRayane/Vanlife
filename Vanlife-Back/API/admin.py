from django.contrib import admin

from .models import  NewUser, Van, Comment

class New_user(admin.ModelAdmin):
    filter_horizontal = []
    

admin.site.register(NewUser)
admin.site.register(Van)
admin.site.register(Comment)
