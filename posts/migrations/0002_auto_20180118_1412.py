# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-01-18 14:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='message',
            field=models.TextField(max_length=300, verbose_name=b'Message'),
        ),
        migrations.AlterField(
            model_name='post',
            name='name',
            field=models.CharField(max_length=50, verbose_name=b'Name'),
        ),
    ]
