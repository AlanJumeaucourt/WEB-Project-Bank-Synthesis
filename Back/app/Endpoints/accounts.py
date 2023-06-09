from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import mariadb
from datetime import datetime, timedelta

def list_accounts():
    try:
        # Connexion à la base de données MariaDB
        conn = mariadb.connect(
            user="root",
            password="rootpassword",
            host="mariadb",
            port=3306,
            database="User1"
        )

        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Accounts")
        accounts = cursor.fetchall()
        cursor.close()

        # Conversion des résultats en format JSON
        encoded_accounts = jsonable_encoder(accounts)

        return JSONResponse(content=encoded_accounts)
    except mariadb.Error as e:
        print(f"Erreur lors de la récupération des comptes : {e}")
        return JSONResponse(content={"message": "Erreur lors de la récupération des comptes"}, status_code=500)


def get_account_balance(compte_id: int):
    try:
        # Connexion à la base de données MariaDB
        conn = mariadb.connect(
            user="root",
            password="rootpassword",
            host="mariadb",
            port=3306,
            database="User1"
        )

        cursor = conn.cursor()
        cursor.execute("SELECT SUM(amount) FROM Transactions WHERE source_account_id = ? OR destination_account_id = ?", (compte_id, compte_id))
        balance = cursor.fetchone()[0]
        cursor.close()

        if balance is None:
            return JSONResponse(content={"message": "Compte introuvable"}, status_code=404)

        return JSONResponse(content={"solde": balance})
    except mariadb.Error as e:
        print(f"Erreur lors de la récupération du solde du compte : {e}")
        return JSONResponse(content={"message": "Erreur lors de la récupération du solde du compte"}, status_code=500)

def get_account_balance_cumulative(compte_id: int):
    try:
        # Connexion à la base de données MariaDB
        conn = mariadb.connect(
            user="root",
            password="rootpassword",
            host="mariadb",
            port=3306,
            database="User1"
        )
        start_date = datetime(2021, 1, 1)
        end_date = datetime(2021, 12, 31)

        cursor = conn.cursor()
        balances_per_day = {}

        current_date = start_date
        while current_date <= end_date:
            cursor.execute("SELECT COALESCE(SUM(amount), 0) FROM Transactions WHERE (source_account_id = ? OR destination_account_id = ?) AND transaction_date <= ?", (compte_id, compte_id, current_date))
            balance = cursor.fetchone()[0]

            balances_per_day[current_date.strftime("%Y-%m-%d")] = balance

            current_date += timedelta(days=1)

        cursor.close()

        return JSONResponse(content=balances_per_day)
    except mariadb.Error as e:
        print(f"Erreur lors de la récupération des soldes par jour : {e}")
        return JSONResponse(content={"message": "Erreur lors de la récupération des soldes par jour"}, status_code=500)