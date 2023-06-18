from keycloak import KeycloakOpenID
from fastapi import HTTPException
import os

keycloak_openid = None

def check_user_token(token):
    keycloak_openid = KeycloakOpenID(server_url=os.environ.get('KEYCLOAK_BASE_URL'),
                                 client_id="frontendReact",
                                 realm_name="TCArgent",
                                 client_secret_key="")
    
    user_info = keycloak_openid.userinfo(token)
    try:
        user_info = keycloak_openid.userinfo(token)
    except:
        raise HTTPException(status_code=401, detail="Erreur lors du traitement du jeton")
    return user_info

def retrieve_username(token):
    user_info = check_user_token(token)
    return user_info['preferred_username']

def check_is_user_admin():
    return

def check_is_user_dev():
    return
