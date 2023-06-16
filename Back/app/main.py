from typing import Union

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.Endpoints.hello import hello
from app.Endpoints.accounts import list_accounts
from app.Endpoints.accounts import get_account_balance
from app.Endpoints.accounts import get_account_balance_cumulative

from app.sso_utils import retrieve_username

app = FastAPI()
security = HTTPBearer()

#CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#test endpoint
@app.get("/")
def read_root(credentials: HTTPAuthorizationCredentials = Depends(security)):
    if not credentials:
        raise HTTPException(status_code=401, detail="Non Connecté")
    user = retrieve_username(credentials.credentials)
    return hello(user)

#accounts endpoints
@app.get("/comptes")
async def get_accounts():
    return list_accounts()

@app.get("/comptes/{compte_id}/solde")
async def comptesSolde(compte_id: int):
    return get_account_balance(compte_id)

@app.get("/comptes/{compte_id}/soldeperiode")
async def comptesSoldecommule(compte_id: int):
    return get_account_balance_cumulative(compte_id)

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}