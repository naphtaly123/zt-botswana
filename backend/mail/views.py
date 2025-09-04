import json
from rest_framework import status
from django.http import JsonResponse
from django.core.mail import EmailMessage, get_connection
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
import logging

from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMultiAlternatives

import requests
import os
from msal import ConfidentialClientApplication

from .models import UserMessage

logger = logging.getLogger(__name__)

def saveUserEmail(firstName, lastName, phone, email, subject, message):
    if not email or not subject:
        raise ValueError('Email and Subject cannot be empty!')
    user_message = UserMessage(firstName=firstName, lastName=lastName, phone=phone, email=email, subject=subject, message=message)
    user_message.save()
    return 
def sendToUs(subject, message, user_email, phone):
    email_from = settings.EMAIL_HOST_USER
    email_to = settings.EMAIL_TO_COMPANY
    subject = subject
    message = f'user: {user_email} \n Phone:{phone} \n says: {message}'
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
    '''
    This function is for the email backend system of Gmail as the primary sending email, the system currently uses outlook. check the 
    PushMail view which uses oulook as the primary backend
    '''
    def post(self, request):
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=status.HTTP_400_BAD_REQUEST)

        subject = 'Thank you for contacting us!'
        user_subject = data.get("subject")
        email_from = settings.EMAIL_HOST_USER
        recipient_email = data.get("email")
        message = data.get("message", '')
        phone = data.get("phone", '')

        if not recipient_email:
            return JsonResponse({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

        message_body = f'You are receiving this email because you sent us an email, SUBJECT: {user_subject}. Kindly note that we are working on it and we\'ll get back to you soon.\nSincerly, \nZimele Technologies Botswana \n(+267) 79127013'
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
                sendToUs(subject=user_subject,message=message,user_email=recipient_email, phone=phone)
                logger.info("Email sent to user: %s", recipient_email)
                saveUserEmail(firstName="General",lastName="General", phone="2677111111",email=recipient_email, subject=user_subject, message=message)
                return JsonResponse({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("Error sending email: %s", e, exc_info=True)
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
#DetailedMail
@method_decorator(csrf_exempt, name='dispatch')
class DetailedMailView(View):
    '''
    This function is for the email backend system of Gmail as the primary sending email, the system currently uses outlook. check the 
    PushMail view which uses oulook as the primary backend
    '''
    def post(self, request):
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=status.HTTP_400_BAD_REQUEST)

        subject = 'Thank you for contacting us!'
        user_firstName = data.get("firstName")
        user_lastName = data.get("lastName")
        user_phone = data.get("phone")
        user_subject = data.get("subject")
        email_from = settings.EMAIL_HOST_USER
        recipient_email = data.get("email")
        message = data.get("message", '')

        if not recipient_email:
            return JsonResponse({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        #Render email template
        html_content = render_to_string('mail/email-contact-body.html', {
            'first_name': user_firstName,
            'subject': user_subject,
            'message': message,
            'email': recipient_email
        })

        #For emails that don't support HTML
        text_content = strip_tags(html_content)

        try:
            with get_connection(
                host=settings.EMAIL_HOST,
                port=settings.EMAIL_PORT,
                username=settings.EMAIL_HOST_USER,
                password=settings.EMAIL_HOST_PASSWORD,
                use_tls=settings.EMAIL_USE_TLS
                
            ) as connection:
                # print(settings.EMAIL_HOST, settings.EMAIL_HOST_PASSWORD)
                # email_message = EmailMessage(subject, message_body, email_from, [recipient_email], connection=connection)
                # Create email message with both HTML and text versions
                email_message = EmailMultiAlternatives(
                    subject,
                    text_content,
                    settings.EMAIL_HOST_USER,
                    [recipient_email],
                    connection=connection
                )
                email_message.attach_alternative(html_content, "text/html")
                email_message.send()#Sending to the user
                sendToUs(subject=user_subject,message=message,user_email=recipient_email, phone=user_phone) #Send to the company
                logger.info("Email sent to user: %s", recipient_email)
                saveUserEmail(firstName=user_firstName, lastName=user_lastName, phone=user_phone, email=recipient_email, subject=user_subject, message=message)
                return JsonResponse({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("Error sending email: %s", e, exc_info=True)
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


#Uses Outlook as the primary sending email
@method_decorator(csrf_exempt, name='dispatch')
class send_email_graph(View):

    def post(self, request):
        try:
            data = json.loads(request.body)
            
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Authentication Variables
        tenant_id = os.getenv('tenant_id')
        client_id = os.getenv('client_id')
        client_secret = os.getenv('client_secret')
        from_email = os.getenv('from_email')
        info_email = os.getenv('info_email')

        # User Data
        user_firstName = data.get("firstName")
        user_lastName = data.get("lastName")
        user_phone = data.get("phone")
        user_subject = data.get("subject")
        recipient_email = data.get("email")
        message = data.get("message", '')

        # Validate required fields
        if not recipient_email:
            return JsonResponse({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)
        if not user_subject:
            return JsonResponse({"error": "Subject is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Render email template
        html_content = render_to_string('mail/email-contact-body.html', {
            'first_name': user_firstName,
            'subject': user_subject,
            'message': message,
            'email': recipient_email
        })

        print("🔑 Acquiring access token...")
        
        # 1. Get Access Token
        try:
            app = ConfidentialClientApplication(
                client_id=client_id,
                client_credential=client_secret,
                authority=f"https://login.microsoftonline.com/{tenant_id}",
            )

            result = app.acquire_token_for_client(scopes=["https://graph.microsoft.com/.default"])
        
            if "access_token" not in result:
                print(f"❌ Token acquisition failed: {result.get('error_description')}")
                return JsonResponse({"error": "Authentication failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
            access_token = result['access_token']
            
        except Exception as e:
            print(f"❌ Token acquisition error: {e}")
            return JsonResponse({"error": "Authentication error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # 2. Prepare email request
        graph_url = f"https://graph.microsoft.com/v1.0/users/{from_email}/sendMail"

        # Sending to the user
        email_data = {
            "message": {
                "subject": "Noreply - Automated Confirmation",
                "body": {
                    "contentType": "HTML",
                    "content": html_content
                },
                "toRecipients": [
                    {
                        "emailAddress": {
                            "address": recipient_email
                        }
                    }
                ]
            },
            "saveToSentItems": "true"
        }

        # Email to info - Fixed content type and formatting
        email_to_us = {
            "message": {
                "subject": f'WEBSITE REQUEST - {user_subject}',
                "body": {
                    "contentType": "Text",  # Changed to Text for plain content
                    "content": f"User: {recipient_email}\nPhone: {user_phone or 'Not provided'}\nSubject: {user_subject}\nMessage: {message or 'No message'}"
                },
                "toRecipients": [
                    {
                        "emailAddress": {
                            "address": info_email
                        }
                    }
                ]
            },
            "saveToSentItems": "true"
        }

        headers = {
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }

        # 3. Send requests
        print("📨 Sending email to user...")
        try:
            # Sending to user
            response_user = requests.post(graph_url, headers=headers, json=email_data)
            
            if response_user.status_code == 202:
                print("✅ User email sent successfully!")
                
                # Sending to our info mailbox
                print("📨 Sending email to info mailbox...")
                response_info = requests.post(graph_url, headers=headers, json=email_to_us)
                
                if response_info.status_code == 202:
                    print("✅ Info email sent successfully!")
                    
                    # Save user email to database
                    saveUserEmail(
                        firstName=user_firstName, 
                        lastName=user_lastName, 
                        phone=user_phone, 
                        email=recipient_email, 
                        subject=user_subject, 
                        message=message
                    )
                    
                    return JsonResponse({"success": "Emails sent successfully"}, status=status.HTTP_200_OK)
                else:
                    print(f"❌ Info email failed: {response_info.status_code} - {response_info.text}")
                    return JsonResponse({"error": "Failed to send internal notification"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            else:
                print(f"❌ User email failed: {response_user.status_code} - {response_user.text}")
                return JsonResponse({"error": "Failed to send confirmation email"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
        except Exception as e:
            print(f"❌ Request failed: {e}")
            return JsonResponse({"error": "Email sending failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
