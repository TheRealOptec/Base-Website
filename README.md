# Base Website

## Sources

### External Libraries and Frameworks

- Django 2.2.28
  Main web framework used for routing, models, forms, templates, authentication, and backend tests.
  URL: https://docs.djangoproject.com/en/2.2/

- Bootstrap 5.3.8
  Used for the main responsive layout and UI styling. Loaded in the shared base template via jsDelivr CDN.
  URLs:
  https://getbootstrap.com/docs/5.3/getting-started/introduction/
  https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css
  https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js

- Bootstrap Icons 1.5.0
  Used for iconography in the frontend templates. Loaded via jsDelivr CDN.
  URLs:
  https://icons.getbootstrap.com/
  https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css

- Pillow
  Used for Django image upload support, including user profile pictures.
  URL: https://pillow.readthedocs.io/

- Requests
  Used for outgoing HTTP requests to external APIs.
  URL: https://requests.readthedocs.io/

### APIs Used

- NewsAPI
  Used by the news embedding/search functionality in the backend API handler and Simples post integration.
  URLs:
  https://newsapi.org/
  https://newsapi.org/docs/endpoints/everything

### Development References

- Django documentation: project configuration, settings, deployment, WSGI, and URL routing
  URLs:
  https://docs.djangoproject.com/en/2.2/topics/http/urls/
  https://docs.djangoproject.com/en/2.2/topics/settings/
  https://docs.djangoproject.com/en/2.2/ref/settings/
  https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/
  https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
  https://docs.djangoproject.com/en/2.2/howto/static-files/

- Stack Overflow: Django URL pattern string parameter matching
  Used as a reference for URL matching in the project URL configuration.
  URL: https://stackoverflow.com/questions/11894916/django-url-pattern-string-parameter

- Stack Overflow: Getting the current time in Python
  Used as an earlier reference in model timestamp work.
  URL: https://stackoverflow.com/questions/415511/how-do-i-get-the-current-time-in-python

- Stack Overflow: Adding parameters to a URL in Python
  Used as a reference for URL parameter handling in the API helper.
  URL: https://stackoverflow.com/questions/2506379/add-params-to-given-url-in-python

- Stack Overflow: Getting GET request values in Django
  Used as a reference in the backend API request handler.
  URL: https://stackoverflow.com/questions/150505/how-to-get-get-request-values-in-django

- W3Schools Django tutorial: queryset filtering
  Used as a reference for search filtering logic.
  URL: https://www.w3schools.com/django/django_queryset_filter.php

- W3Schools Django tutorial: template for-loops
  Used as a reference in template iteration work.
  URL: https://www.w3schools.com/django/django_tags_for.php
