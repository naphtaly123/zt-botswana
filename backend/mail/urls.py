from django.urls import path
from .views import GeneralMailView, DetailedMailView


urlpatterns=[
    path('send-email/general/', GeneralMailView.as_view(), name="general-email"),
    path('send-email/detailed/', DetailedMailView.as_view(), name="detailed-email")
    # path('send-email/', send_email, name="send-email")

]