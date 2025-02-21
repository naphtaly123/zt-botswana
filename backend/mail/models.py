from django.db import models
from db_connection import db

# Create your models here.
class UserMessage:
    def __init__(self, email, subject, message):
        self.email = email
        self.subject = subject
        self.message = message

    def save(self):
        try:
            print('Saving message...')
            # Save the message to the MongoDB collection
            db.messages.insert_one({
                'email': self.email,
                'subject': self.subject,
                'message': self.message
            })
            print("User  message saved successfully!")
        except Exception as e:
            print(f"An error occurred while saving the message: {e}")
