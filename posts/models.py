# -*- coding: utf-8 -*-
from django.db import models


class Post(models.Model):
    name = models.CharField(max_length=50, verbose_name='Name')
    message = models.TextField(max_length=300, verbose_name='Message')
