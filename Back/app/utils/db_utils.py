import mariadb
import os
from fastapi import HTTPException
from fastapi.responses import JSONResponse

def connect_to_db(username):
    try:
        conn = mariadb.connect(
            user='root',
            password=os.environ.get('MARIADB_ROOT_PASSWORD'),
            host='mariadb',
            port=3306,
            database=username
        )
        return conn
    except:
        raise HTTPException(status_code=500, detail="Erreur lors de la connexion à la DB")

def add_transactions(username, transactions):
    try:
        #if the DB does not exist
        add_user(username)
    finally:
        #add the transactions
        conn = connect_to_db(username)
        cursor = conn.cursor()
        at_least_a_failed_one = False
        
        for transaction in transactions:
            try:
                cursor.execute("INSERT INTO Transactions (source_account_id, destination_account_id, transaction_date, description, category, amount) VALUES (?, ?, ?, ?, ?, ?)",
                        (transaction.source_account_id, transaction.destination_account_id, transaction.transaction_date, transaction.description, transaction.category, transaction.amount))
                
                conn.commit()
                print("Transaction insérée avec succès.")
            except:
                at_least_a_failed_one = True
                print("Erreur lors de l'insertion de la transaction.")
                conn.rollback()
        conn.close()
        if at_least_a_failed_one:
            return JSONResponse(content={"message: Certaines transactions n'ont pas été chargées en base"}, status_code=207)
        else:
            return JSONResponse(content={"message: Toutes les transactions ont été chargées en base"}, status_code=200)

def add_account(username, account, new_esta=True):
    conn = connect_to_db(username)
    cursor = conn.cursor()
    try:
        #establishement
        if new_esta:
            cursor.execute("INSERT INTO Establishments (name) VALUES (?)",
                (account.establishment_name))
            establishment_id = cursor.lastrowid
        else:
            establishment_id = get_establishment_id_from_name(username, account.establishment_name)
        
        #account
        cursor.execute("INSERT INTO Accounts (account_number, account_name, establishment_id, type, tag) VALUES (?, ?, ?, ?, ?)",
                (account.account_number, account.account_name, establishment_id, account.type, account.tag))
        print("le compte a été ajouté")
    except:
        raise Exception("Erreur lors de l'ajout du compte")
                     
def add_user(username):
    conn = mariadb.connect(
        user=os.environ.get('MARIADB_USER'),
        password=os.environ.get('MARIADB_USER_PASWORD'),
        host=os.environ.get('MARIADB_URL'),
        port=3306
    )

    cursor = conn.cursor()
    
    sql = f"CREATE SCHEMA IF NOT EXISTS {username};"
    cursor.execute(sql)
    
    #create the tables
    sql = f"USE {username}"
    cursor.execute(sql)
    
    sql = f"CREATE TABLE {username}.Establishments (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));"
    cursor.execute(sql)
    
    sql = f"CREATE TABLE {username}.Accounts (id INT AUTO_INCREMENT PRIMARY KEY, account_number VARCHAR(255), account_name VARCHAR(255), establishment_id INT, type VARCHAR(255), tag VARCHAR(255), FOREIGN KEY (establishment_id) REFERENCES {username}.Establishments(id));"
    cursor.execute(sql)
    
    sql = f"CREATE TABLE {username}.Transactions (id INT AUTO_INCREMENT PRIMARY KEY, source_account_id INT, destination_account_id INT, transaction_date TIMESTAMP, amount FLOAT, description VARCHAR(255), category VARCHAR(255), FOREIGN KEY (source_account_id) REFERENCES {username}.Accounts(id), FOREIGN KEY (destination_account_id) REFERENCES {username}.Accounts(id));"
    cursor.execute(sql)
    
    conn.commit()
    cursor.close()
    conn.close()

def get_establishment_id_from_name(username, establishment_name):
    #TODO
    return 1