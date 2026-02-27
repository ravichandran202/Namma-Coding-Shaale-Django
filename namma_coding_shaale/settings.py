from pathlib import Path
import os
from dotenv import load_dotenv

# Load environment variables conditionally
# Check if we should use stage/local or production environment
env_file = os.environ.get('ENV_FILE', '.env.stage')  # Default to stage for local dev

# If ENV=production is set in the current environment, use .env
if os.environ.get('ENV') == 'production':
    env_file = '.env'

# Load the appropriate environment file
load_dotenv(env_file)
print(f"[INFO] Loaded environment from: {env_file}")


GOOGLE_OAUTH_CLIENT_ID = os.environ.get('GOOGLE_OAUTH_CLIENT_ID')
if not GOOGLE_OAUTH_CLIENT_ID:
    raise ValueError(
        'GOOGLE_OAUTH_CLIENT_ID is missing.'
        'Have you put it in a file at core/.env ?'
    )


import pymysql
pymysql.install_as_MySQLdb()


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
TEMP_DIR = os.path.join(BASE_DIR,'templates')
STATIC_DIR = os.path.join(BASE_DIR,'static')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-=x60&gd05-y6awfc3lcqh2!lvlw(%y4tyu9g9pnna*&z9^%0bp'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    "namma_coding_shaale_app",
    "rooms_app",
    "django.contrib.humanize",
    'rest_framework',
    'corsheaders',
    'login_history'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'namma_coding_shaale_app.middleware.RequestLoggingMiddleware',
]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


ROOT_URLCONF = 'namma_coding_shaale.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMP_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'namma_coding_shaale.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'namma_coding_shaale',
        'USER': '3NX72gCWzf96vzw.root',
        'PASSWORD': 'jqhOS753anJR7Q8e',
        'HOST': 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
        'PORT': '4000',
        'OPTIONS': {
            'ssl': {
                'ca': BASE_DIR / 'certs/ca.pem',  # Make sure this path is correct
            }
        }
    }
}



# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Kolkata'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "static/"
STATICFILES_DIRS = [STATIC_DIR]

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CSRF_TRUSTED_ORIGINS = [
    "https://nammacodingshaale.in",
    "https://nammacodingshaale.up.railway.app",
    "http://127.0.0.1:8000",
    "http://localhost:8000",
    "http://0.0.0.0:8080"
]

# Allow requests from your frontend origin
CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:8000",
    "http://localhost:8000",
    "http://0.0.0.0:8080",
    "https://namma-coding-shaale.onrender.com",
    "https://nammacodingshaale.up.railway.app",
    "https://nammacodingshaale.in"
]

# Allow cookies (if needed)
CORS_ALLOW_ALL_ORIGINS = DEBUG  # Allow all in debug only
CORS_ALLOW_CREDENTIALS = True


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = 'ravichandrants202@gmail.com'
EMAIL_HOST_PASSWORD = 'xfifgwzfkdahswpx'

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s %(message)s'
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
        # We define this placeholder so we can reference it below, 
        # but the actual OTel logic happens in otel.py or auto-instrumentation
        'otel': {
            'class': 'opentelemetry.sdk._logs.LoggingHandler',
        },
    },
    'loggers': {
        'request_logger': {
            'handlers': ['console', 'otel'],
            'level': 'INFO',
            'propagate': False,
        },
    },
    'root': {
        'handlers': ['console', 'otel'],
        'level': 'INFO',
    },
}


# We need these lines below to allow the Google sign in popup to work.
SECURE_REFERRER_POLICY = 'no-referrer-when-downgrade'
SECURE_CROSS_ORIGIN_OPENER_POLICY = "same-origin-allow-popups"

CREDENTIALS = {
    "GOOGLE_OAUTH_CLIENT_ID": os.environ.get('GOOGLE_OAUTH_CLIENT_ID', 'your-default-google-client-id'),
    "PHONE_PAY_CLIENT_ID": os.environ.get('PHONE_PAY_CLIENT_ID', 'TEST-M233XRFQNGJPC_25093'),
    "PHONE_PAY_CLIENT_SECRET": os.environ.get('PHONE_PAY_CLIENT_SECRET', 'MTgwNTQ0ZDItM2Y0Ni00ZWJjLWE0ZDUtZjYxNjhiMTQ0ODMz'),
    "PHONE_PAY_CLIENT_VERSION": os.environ.get('PHONE_PAY_CLIENT_VERSION', '1'),
    "PHONE_PAY_REDIRECTION_URI": os.environ.get('PHONE_PAY_REDIRECTION_URI', 'http://127.0.0.1:8000')
}


# MessageCentral API Credentials
import os
MESSAGE_CENTRAL_CUSTOMER_ID = os.environ.get('MESSAGE_CENTRAL_CUSTOMER_ID')
MESSAGE_CENTRAL_AUTH_TOKEN = os.environ.get('MESSAGE_CENTRAL_AUTH_TOKEN')

# Feature Flags
ENABLE_OTP_VERIFICATION = True # Set to False to bypass OTP verification
