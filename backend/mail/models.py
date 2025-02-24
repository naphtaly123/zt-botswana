from django.db import models
from db_connection import db
from datetime import datetime

# Create your models here.
class UserMessage:
    def __init__(self, email, subject, message):
        self.email = email
        self.subject = subject
        self.message = message
        self.date = datetime.now()

    def save(self):
        try:
            # Save the message to the MongoDB collection
            db.messages.insert_one({
                'email': self.email,
                'subject': self.subject,
                'message': self.message,
                'date':self.date
            })
            print("User  message saved successfully!")
        except Exception as e:
            print(f"An error occurred while saving the message: {e}")
