from django.urls import path

from dj_rest_auth.registration.views import RegisterView

urlpatterns = [
    path("", RegisterView.as_view(), name="jobseeker_register")
]
