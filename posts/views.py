# -*- coding: utf-8 -*-
from django.views.generic import ListView
from django.http import HttpResponseRedirect
from django.shortcuts import render

from posts.models import Post
from posts.forms import PostForm


class PostView(ListView):
    form_class = PostForm
    template_name = 'posts/index.html'
    model = Post

    def get_context_data(self, **kwargs):
        context = super(PostView, self).get_context_data(**kwargs)
        context['form'] = PostForm()
        return context

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            Post.objects.create(name=form.cleaned_data['name'],
                                message=form.cleaned_data['message'])
            return HttpResponseRedirect(request.path_info)
        return render(request, self.template_name, {'form': form})
