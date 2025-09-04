from django.urls import path
from .views import GeneralMailView, DetailedMailView, send_email_graph


urlpatterns=[
    path('send-email/general/', GeneralMailView.as_view(), name="general-email"),
    path('send-email/detailed/', DetailedMailView.as_view(), name="detailed-email"),
    path('send-email/sendmailgraph/', send_email_graph.as_view(), name="sendmail-graph")
    # path('send-email/', send_email, name="send-email")

]