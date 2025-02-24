
import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from urllib.parse import quote
from dotenv import load_dotenv
load_dotenv()

password = os.getenv('DB_PASSWORD')
username = os.getenv('DB_USERNAME')


encodePass=quote(password)
encodeUser=quote(username)

uri = f"mongodb+srv://{encodeUser}:{encodePass}@cluster0.1vqtiu3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client['UserContact']

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged...")
    print("Database connected...")
except Exception as e:
    print('Could not connect to the database: ', e)

# from pymongo import MongoClient
# def get_db_handle(db_name, host, port, username, password):

#  client = MongoClient(host=host,
#                       port=int(port),
#                       username=username,
#                       password=password
#                      )
#  db_handle = client['db_name']
#  return db_handle, client