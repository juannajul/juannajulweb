"""
Blog Forms
"""

from email import message
import email
from turtle import title
from unicodedata import name
from django import forms
from django.core import validators

class ContactForm(forms.Form):
    """
    Contact form
    """
    name = forms.CharField(label='', max_length=64, min_length=2, required=True,
        widget = forms.TextInput(attrs={'placeholder': 'name', 'class': 'contact-form-name'}),
        validators = [
            validators.MinLengthValidator(1, 'Insert your name')
        ] )  
    lastname = forms.CharField(label='', max_length=64, min_length=2, required=True,
        widget = forms.TextInput(attrs={'placeholder': 'Lastname', 'class': 'contact-form-lastname'}),
        validators = [
            validators.MinLengthValidator(1, 'Insert your lastname')
        ] )  
    message = forms.CharField(label='', max_length=528, required=True, min_length=1,
        widget = forms.Textarea(attrs={'placeholder': 'Insert Message', 'class': 'contact-form-message'}),
        validators = [
            validators.MinLengthValidator(1, 'Insert a message')
        ] )  
    email = forms.EmailField(label='', max_length=64, min_length=5, required=True,
        widget = forms.EmailInput(attrs={'placeholder':'Email', 'class': 'contact-form-email'})
    )