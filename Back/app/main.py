from typing import Union

from fastapi import FastAPI

from app.Endpoints.hello import hello as hello_from_api
from app.Endpoints.accounts import list_accounts
from app.Endpoints.accounts import get_account_balance
from app.Endpoints.accounts import get_account_balance_cumulative

app = FastAPI()


@app.get("/")
def read_root():
    return hello_from_api()

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
