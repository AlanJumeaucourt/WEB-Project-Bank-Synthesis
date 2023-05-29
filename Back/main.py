from fastapi import FastAPI
from Endpoints.hello import hello as hello_from_api

app = FastAPI()

@app.get("/")
def hello():
    return hello_from_api()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8082)

