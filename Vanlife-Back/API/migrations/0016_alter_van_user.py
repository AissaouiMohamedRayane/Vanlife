# Generated by Django 5.0.4 on 2024-06-08 11:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0015_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='van',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_vans', to=settings.AUTH_USER_MODEL),
        ),
    ]
