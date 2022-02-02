from django.shortcuts import render
from .forms import ContactForm

# Create your views here.

def index(request):
    return render(request, "../templates/web/index.html",
    {'form': ContactForm()}
    )

