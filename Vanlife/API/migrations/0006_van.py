# Generated by Django 4.2.7 on 2024-05-13 11:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0005_alter_newuser_test'),
    ]

    operations = [
        migrations.CreateModel(
            name='Van',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True, verbose_name='van name')),
                ('price', models.FloatField(verbose_name='van price')),
                ('image', models.ImageField(upload_to=None, verbose_name='van image')),
                ('type', models.CharField(max_length=50, verbose_name='van type')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
