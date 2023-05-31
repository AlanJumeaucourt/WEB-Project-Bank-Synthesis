from typing import Union

from fastapi import FastAPI
from app.Endpoints.hello import hello as hello_from_api

app = FastAPI()


@app.get("/")
def read_root():
    return hello_from_api()


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
