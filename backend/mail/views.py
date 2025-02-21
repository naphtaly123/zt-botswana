import json
from rest_framework import status
from django.http import JsonResponse
from django.core.mail import EmailMessage, get_connection
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View

from .models import UserMessage

# Create your views here.
def saveUserEmail(email, subject, message):
    if not email or not subject:
        raise ValueError('Email and Subject cannot be empty!')
    # Logic to save to the database
    user_message = UserMessage(email=email, subject=subject, message=message)
    user_message.save()
    return

@method_decorator(csrf_exempt, name='dispatch')
class SendEmailView(View):
    def post(self, request):
        print("send email method executed")
        print("Check the request data: ", request.body)

        # Parse the JSON data from the request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=status.HTTP_400_BAD_REQUEST)

        subject = 'PROGRAM TEST - Thank you for contacting us!'
        user_subject = data.get("subject")

        email_from = settings.EMAIL_HOST_USER 
        recipient_email = data.get("email")
        message = data.get("message", '')

        print("User data", subject, recipient_email, message) 
        print('Email: ', settings.EMAIL_HOST_USER) 
        print('Password: ', settings.EMAIL_HOST_PASSWORD)
        
        if not recipient_email:
            return JsonResponse({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

        message_body = f'You are receiving this email because you have logged issue: {user_subject}. Kindly note that we are working on the issue and we\'ll get back to you.\nSincerly, \nZimele Technologies Botswana'

        try:
            with get_connection(
                host=settings.EMAIL_HOST,
                port=settings.EMAIL_PORT,
                username=settings.EMAIL_HOST_USER,
                password=settings.EMAIL_HOST_PASSWORD,
                use_tls=settings.EMAIL_USE_TLS
                ) as connection: 
                print('Initialisation send email...')
                email_message = EmailMessage(subject, message_body, email_from, [recipient_email], connection=connection)
                try:
                    print("Host user email before sending", email_from)
                    email_message.send()
                    return JsonResponse({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
                except Exception as e:
                    return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            print(f"Error sending email: {e}")
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        print('Email sent')

        # save the email details of user to the database
        saveUserEmail(email=recipient_email, subject=user_subject, message=message)

        return JsonResponse({"error": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)