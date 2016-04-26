from django.shortcuts import render

# Create your views here.

import os
from django.shortcuts import render_to_response


def list_directories(request):
    # insert the path to your directory
    dir = os.getcwd()
    path = os.path.join(dir, 'TriageIR_Map_web/static/logs/')
    dir_list = sorted(os.listdir(path))
    return render_to_response('index.html', {'dirs': dir_list})