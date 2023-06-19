from keycloak import KeycloakOpenID
from fastapi import HTTPException
import os

keycloak_openid = None

def check_user_token(token):
    keycloak_openid = KeycloakOpenID(server_url=os.environ.get('REACT_APP_KEYCLOAK_BASE_URLS'),
                                 client_id=os.environ.get('REACT_APP_KEYCLOAK_CLIENTID'),
                                 realm_name=os.environ.get('REACT_APP_KEYCLOAK_REALM'),
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
