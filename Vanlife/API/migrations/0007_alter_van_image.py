# Generated by Django 4.2.7 on 2024-05-13 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0006_van'),
    ]

    operations = [
        migrations.AlterField(
            model_name='van',
            name='image',
            field=models.ImageField(blank=True, default='../assets/van.png', upload_to=None, verbose_name='van image'),
        ),
    ]
