# Generated by Django 5.0.4 on 2024-05-06 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0004_alter_newuser_test'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='test',
            field=models.CharField(blank=True, max_length=50, verbose_name='test'),
        ),
    ]
