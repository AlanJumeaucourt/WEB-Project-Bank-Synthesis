from typing import Union
import os

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.Endpoints.hello import hello
from app.Endpoints.accounts import list_accounts
from app.Endpoints.accounts import get_account_balance
from app.Endpoints.accounts import get_account_balance_cumulative

from app.utils.sso_utils import retrieve_username

app = FastAPI()
security = HTTPBearer()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# test endpoint
@app.get("/")
def read_root(credentials: HTTPAuthorizationCredentials = Depends(security)):
    if not credentials:
        raise HTTPException(status_code=401, detail="Non Connecté")
    username = retrieve_username(credentials.credentials)
    return hello(username)


# accounts endpoints
@app.get("/comptes")
async def get_accounts():
    return list_accounts()


@app.get("/comptes/{compte_id}/solde")
async def comptesSolde(compte_id: int):
    return get_account_balance(compte_id)


@app.get("/comptes/{compte_id}/soldeperiode")
async def comptesSoldecommule(compte_id: int):
    return get_account_balance_cumulative(compte_id)


@app.get("/imports")
async def process_imports(payload: dict):
    account = payload.get("account")
    transactions = payload.get("transactions")
    # TODO
