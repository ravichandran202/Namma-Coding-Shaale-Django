"""
ASGI config for namma_coding_shaale project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from namma_coding_shaale.otel.otel import setup_opentelemetry

setup_opentelemetry()
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'namma_coding_shaale.settings')

application = get_asgi_application()
