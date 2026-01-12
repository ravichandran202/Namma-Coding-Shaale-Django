"""
WSGI config for namma_coding_shaale project.
"""

import os
import pymysql

pymysql.install_as_MySQLdb()

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'namma_coding_shaale.settings')

from django.core.wsgi import get_wsgi_application
from namma_coding_shaale.otel.otel import setup_opentelemetry

setup_opentelemetry()

application = get_wsgi_application()