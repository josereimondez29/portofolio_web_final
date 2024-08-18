#portofolio_web/settings.py
import os
from pathlib import Path
import dj_database_url

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = "django-insecure-p@4p^hhypqre&dm9^+e^%h&%02y&l9xr7r-wh^hzz2*0*(dr84"

DEBUG = 'RENDER' not in os.environ

ALLOWED_HOSTS = [
    'localhost', 
    '127.0.0.1', 
    'solid-space-rotary-phone-xjpj7jrg69gfvppx-8000.app.github.dev',  # Sin barra al final
    'solid-space-rotary-phone-xjpj7jrg69gfvppx-3000.app.github.dev',  # Sin barra al final
    'portofolio-web-final.onrender.com',
    'josereimondez.com',
]

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "blog",  # Tu aplicación de blog
    "rest_framework",
    "corsheaders",
    
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = "portofolio_web.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "portofolio_web.wsgi.application"

DATABASES = {
    'default': dj_database_url.config(
        default='postgresql://admin:Giuliana15@localhost:5432/portofolio_web',
        conn_max_age=600
    )
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

STATIC_URL = "static/"
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Configuración de CORS
CORS_ALLOWED_ORIGINS = [
    "https://solid-space-rotary-phone-xjpj7jrg69gfvppx-3000.app.github.dev",  # Sin barra al final
    "https://solid-space-rotary-phone-xjpj7jrg69gfvppx-8000.app.github.dev",  # Sin barra al final
    "https://portofolio-web-final.onrender.com",
    "https://josereimondez.com"
]

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = [
    'content-type',
    'authorization',
    'x-requested-with',
]

CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
]





