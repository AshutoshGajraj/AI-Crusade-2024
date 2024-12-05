from fastapi import FastAPI
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from classifier_routes import app as router 


app = FastAPI()

app.add_middleware(TrustedHostMiddleware, allowed_hosts=['*'])

app.include_router(router)


