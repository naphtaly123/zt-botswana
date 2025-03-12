from django.db import models
from db_connection import db
from datetime import datetime

# Create your models here.
class UserMessage:
    def __init__(self, firstName,lastName, phone, email, subject, message):
        self.firstName = firstName
        self.lastName = lastName
        self.phone = phone
        self.email = email
        self.subject = subject
        self.message = message
        self.date = datetime.now()

    def save(self):
        try:
            # Save the message to the MongoDB collection
            db.messages.insert_one({
                'firstName':self.firstName,
                'lastName':self.lastName,
                'phone':self.phone,
                'email': self.email,
                'subject': self.subject,
                'message': self.message,
                'date':self.date
            })
            print("User  message saved successfully!")
        except Exception as e:
            print(f"An error occurred while saving the message: {e}")
