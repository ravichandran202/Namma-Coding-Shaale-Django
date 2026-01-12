"""
WSGI config for namma_coding_shaale project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from namma_coding_shaale.otel.otel import setup_opentelemetry

setup_opentelemetry()
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'namma_coding_shaale.settings')

application = get_wsgi_application()
