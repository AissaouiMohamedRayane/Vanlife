# Generated by Django 5.0.4 on 2024-05-18 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0013_alter_van_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/', verbose_name='user image'),
        ),
    ]
