import json

# Methods

#the goal of this function si to handle if the source and/or the destination of a transaction
#is the current user... it return the id of the account in the DB otherwise -1
def retrieve_account_ids(transaction, username):
    #TODO
    return (-1, -1)

#the goal of this function is to turn the json data from to front to a model we already know 
#with this we can handle data from différent banks because  the models are différent from one to another
def json_prepocessor(data, establishment='boursorama'):
    #TODO
    return data

# DTOs

class Transaction:
    def __init__(self, source_account_id, destination_account_id, transaction_date, description, category, amount):
        self.source_account_id = source_account_id
        self.destination_account_id = destination_account_id
        self.transaction_date = transaction_date
        self.description = description
        self.category = category
        self.amount = amount     

class Account:
    def __init__(self, account_number, account_name, establishment_name, account_type, tag):
        self.account_number = account_number
        self.account_name = account_name
        self.establishment_name = establishment_name
        self.account_type = account_type
        self.tag = tag

class Transactions:
    def __init__(self, jsonData, username, establishment):
        self.array = []
        datas = json.loads(jsonData)
        for data in datas:
            data = json_prepocessor(data, establishment)
            src, dst = retrieve_account_ids(data, username)
            self.array.append(Transaction(src, dst, data['dateOp'], data['label'], data['category'], data['amount']))