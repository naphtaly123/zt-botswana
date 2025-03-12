# import json
# from rest_framework import status
# from django.http import JsonResponse
# from django.core.mail import EmailMessage, get_connection
# from django.conf import settings
# from django.views.decorators.csrf import csrf_exempt
# from django.utils.decorators import method_decorator
# from django.views import View

# from .models import UserMessage

# # Create your views here.
# def saveUserEmail(email, subject, message):
#     if not email or not subject:
#         raise ValueError('Email and Subject cannot be empty!')
#     # Logic to save to the database
#     user_message = UserMessage(email=email, subject=subject, message=message)
#     user_message.save()
#     return

# def toCompanyEmail(email, subject, message):
#     email = email
#     subject = subject
#     message = message

#     message_body = f'Email from: {email} - {subject}\n\n{message}'
#     email_from = settings.EMAIL_HOST_USER
#     recipient_email = settings.EMAIL_TO_COMPANY

#     try:
#         with get_connection(
#                 host=settings.EMAIL_HOST,
#                 port=settings.EMAIL_PORT,
#                 username=settings.EMAIL_HOST_USER,
#                 password=settings.EMAIL_HOST_PASSWORD,
#                 use_tls=settings.EMAIL_USE_TLS
#                 ) as connection:
#             email_message_to_user = EmailMessage(subject, message_body, email_from, [recipient_email], connection=connection)
#             try:
#                 email_message_to_user.send()
#                 #Recipient email here is the email of the user, check the toCompanyEmail for the logic
#                 # toCompanyEmail(recipient_email,subject,message)
#                 print("email sent successfull to: ", recipient_email)
#                 return JsonResponse({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
#             except Exception as e:
#                     return JsonResponse({"error[sending to company]": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            

#     except Exception as e:
#         print(f"Error sending email: {e}")
#         return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# @method_decorator(csrf_exempt, name='dispatch')
# class SendEmailView(View):
#     def post(self, request):

#         # Parse the JSON data from the request body
#         try:
#             data = json.loads(request.body)
#         except json.JSONDecodeError:
#             return JsonResponse({"error": "Invalid JSON"}, status=status.HTTP_400_BAD_REQUEST)

#         subject = 'PROGRAM TEST - Thank you for contacting us!'
#         user_subject = data.get("subject")

#         email_from = settings.EMAIL_HOST_USER 
#         recipient_email = data.get("email")
#         message = data.get("message", '')
        
#         if not recipient_email:
#             return JsonResponse({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

#         message_body = f'You are receiving this email because you have logged issue: {user_subject}. Kindly note that we are working on the issue and we\'ll get back to you.\nSincerly, \nZimele Technologies Botswana'

#         try:
#             with get_connection(
#                 host=settings.EMAIL_HOST,
#                 port=settings.EMAIL_PORT,
#                 username=settings.EMAIL_HOST_USER,
#                 password=settings.EMAIL_HOST_PASSWORD,
#                 use_tls=settings.EMAIL_USE_TLS
#                 ) as connection: 
#                 email_message= EmailMessage(subject, message_body, email_from, [recipient_email], connection=connection)
#                 try:
#                     email_message.send()
#                     #Recipient email here is the email of the user, check the toCompanyEmail for the logic
#                 # toCompanyEmail(recipient_email,subject,message)
                    
#                     print("Email sent to user: ", recipient_email)
#                     saveUserEmail(email=recipient_email, subject=user_subject, message=message)
#                     return JsonResponse({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
#                 except Exception as e:
#                     return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#         except Exception as e:
#             print(f"Error sending email: {e}")
#             return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            

#         # save the email details of user to the database
#         saveUserEmail(email=recipient_email, subject=user_subject, message=message)

#         return JsonResponse({"error": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
import json
from rest_framework import status
from django.http import JsonResponse
from django.core.mail import EmailMessage, get_connection
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
import logging

from .models import UserMessage

logger = logging.getLogger(__name__)

def saveUserEmail(firstName, lastName, phone, email, subject, message):
    if not email or not subject:
        raise ValueError('Email and Subject cannot be empty!')
    user_message = UserMessage(firstName=firstName, lastName=lastName, phone=phone, email=email, subject=subject, message=message)
    user_message.save()
    return 
def sendToUs(subject, message, user_email):
    email_from = settings.EMAIL_HOST_USER
    email_to = settings.EMAIL_TO_COMPANY
    subject = subject
    message = f'user: {user_email} \n says: {message}'
    try:
        with get_connection(
            host=settings.EMAIL_HOST,
            port=settings.EMAIL_PORT,
            username=settings.EMAIL_HOST_USER,
            password=settings.EMAIL_HOST_PASSWORD,
            use_tls=settings.EMAIL_USE_TLS
            ) as connection:
            email_to_us = EmailMessage(subject, message, email_from, [email_to], connection=connection)
            email_to_us.send()
            logger.info("Email sent to user: %s", email_to)
            saveUserEmail(firstName="Admin",lastName="Admin", phone="2677111111",email=email_to, subject=subject, message=message)
            return JsonResponse({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
    except Exception as e:
            logger.error("Error sending email: %s", e, exc_info=True)
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@method_decorator(csrf_exempt, name='dispatch')
class GeneralMailView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=status.HTTP_400_BAD_REQUEST)

        subject = 'PROGRAM TEST - Thank you for contacting us!'
        user_subject = data.get("subject")
        email_from = settings.EMAIL_HOST_USER
        recipient_email = data.get("email")
        message = data.get("message", '')

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
                print(settings.EMAIL_HOST, settings.EMAIL_HOST_PASSWORD)
                email_message = EmailMessage(subject, message_body, email_from, [recipient_email], connection=connection)
                email_message.send()
                sendToUs(subject=user_subject,message=message,user_email=recipient_email)
                logger.info("Email sent to user: %s", recipient_email)
                saveUserEmail(firstName="General",lastName="General", phone="2677111111",email=recipient_email, subject=user_subject, message=message)
                return JsonResponse({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("Error sending email: %s", e, exc_info=True)
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
#DetailedMail       
@method_decorator(csrf_exempt, name='dispatch')
class DetailedMailView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=status.HTTP_400_BAD_REQUEST)

        subject = 'PROGRAM TEST - Thank you for contacting us!'
        user_firstName = data.get("firstName")
        user_lastName = data.get("lastName")
        user_phone = data.get("phone")
        user_subject = data.get("subject")
        email_from = settings.EMAIL_HOST_USER
        recipient_email = data.get("email")
        message = data.get("message", '')

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
                # print(settings.EMAIL_HOST, settings.EMAIL_HOST_PASSWORD)
                email_message = EmailMessage(subject, message_body, email_from, [recipient_email], connection=connection)
                email_message.send()#Sending to the user
                sendToUs(subject=user_subject,message=message,user_email=recipient_email)#Send to the company
                logger.info("Email sent to user: %s", recipient_email)
                saveUserEmail(firstName=user_firstName, lastName=user_lastName, phone=user_phone, email=recipient_email, subject=user_subject, message=message)
                return JsonResponse({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("Error sending email: %s", e, exc_info=True)
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)