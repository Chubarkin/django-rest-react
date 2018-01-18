# -*- coding: utf-8 -*-
from rest_framework import viewsets

from api.serializers import PostSerializer
from posts.models import Post


class PostJSONView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
