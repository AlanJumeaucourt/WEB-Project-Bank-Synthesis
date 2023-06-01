from typing import Union

from fastapi import FastAPI

from app.Endpoints.hello import hello as hello_from_api
from app.Endpoints.accounts import list_accounts as list_accounts

app = FastAPI()


@app.get("/")
def read_root():
    return hello_from_api()

@app.get("/comptes")
async def get_accounts():
    return list_accounts()


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


