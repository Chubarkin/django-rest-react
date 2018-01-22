# -*- coding: utf-8 -*-
from django.views.generic import ListView

from posts.models import Post
from posts.forms import PostForm


class PostView(ListView):
    form_class = PostForm
    template_name = 'posts/index.html'
    model = Post
