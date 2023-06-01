from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import mariadb

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

