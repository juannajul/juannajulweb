from django.shortcuts import render
from .forms import ContactForm
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.conf import settings

# Create your views here.

def send_email(name, lastname, email, message):
    context = {
        'name': name,
        'lastname': lastname,
        'email': email,
        'message': message
    }

    template = get_template('../templates/web/correo.html')
    content = template.render(context)

    email = EmailMultiAlternatives(
        f'Email from {name} {lastname} {email}',
        message,
        settings.EMAIL_HOST_USER,
        [
            settings.EMAIL_HOST_USER,
            settings.MY_EMAIL
        ],
    )
    email.attach_alternative(content, 'text/html')
    email.send()

def index(request):
    if request.method == 'POST':
        mail_form = ContactForm(request.POST)
        if mail_form.is_valid():
            name = mail_form.cleaned_data['name']
            lastname = mail_form.cleaned_data['lastname']
            email = mail_form.cleaned_data['email']
            message = mail_form.cleaned_data['message']
            send_email(name, lastname, email, message)

    return render(request, "../templates/web/index.html",
    {'form': ContactForm()}
    )

