from django.shortcuts import render


def home(request):
    context = {
        'domain_name': 'localhost',
    }
    return render(request, 'Main/home.html', context=context)