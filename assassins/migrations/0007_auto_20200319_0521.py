# Generated by Django 3.0.4 on 2020-03-19 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('assassins', '0006_auto_20200319_0514'),
    ]

    operations = [
        migrations.AlterField(
            model_name='respawn',
            name='timestamp',
            field=models.DateTimeField(null=True),
        ),
    ]
