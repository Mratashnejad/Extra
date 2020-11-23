from django.shortcuts import render

# Create your views here.
from .models import *
from django.views.generic import ListView, DetailView, View
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.http import HttpResponse
from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from django.contrib import messages

import random
import string
import stripe
# class ExtraManager(View):   

#     def Extramanager (self,**args):


def ExtraMembers(request):
    context = {
        'extra':Extra.objects.all()
    }
    return render (request ,context)
