from fastapi import FastAPI, Query, HTTPException
from pydantic import BaseModel

import os
from mistralai import Mistral
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
api_key = os.environ["MISTRAL_API_KEY"]
model = "mistral-large-latest"

client = Mistral(api_key=api_key)

app = FastAPI()

context_storage = {"context": "","transcript":""}
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class SetContextRequest(BaseModel):
    context: str

class FeedbackRequest(BaseModel):
    question: str
    answer: str

class FeedbackResponse(BaseModel):
    feedback: str

class WritingTestRequest(BaseModel):
    title: str
    answer: str

@app.post("/set_context")
async def set_context(request: SetContextRequest):
    """
    POST endpoint to set the context for future evaluations.
    """
    context_storage["context"] = request.context
    return {"message": "Context set successfully."}

@app.post("/set_audio")
async def set_audio(request: SetContextRequest):
    """
    POST endpoint to set the context for future evaluations.
    """
    context_storage["transcript"] = request.context
    return {"message": "Context set successfully."}

@app.post("/reading_test", response_model=FeedbackResponse)
async def reading_test(
    question: str = Query(..., description="The query based on the given context."),
    answer: str = Query(..., description="The response provided by the user.")
):
    """
    Post endpoint for the reading test evaluation.
    Takes question and answer as input, uses stored context, and returns feedback.
    """
    context = context_storage.get("context")
    if not context:
        raise HTTPException(status_code=400, detail="Context is not set. Please set the context first.")

    response = client.chat.complete(
        model=model,
        messages=[
            {
                "role": "system",
                "content": "You are a expert IELTS instructor. A student has provided you with the following question and answer. Please provide short feedback on the answer.",
                "role": "user",
                "content": f"Context: {context}\nQuestion: {question}\nAnswer: {answer}\nFeedback:",
            },
        ]
    )

    feedback = response.choices[0].message.content
    return FeedbackResponse(feedback=feedback)

@app.post("/writing_test", response_model=FeedbackResponse)
async def writing_test(item: WritingTestRequest):
    """
    GET endpoint for the reading test evaluation.
    Takes question and answer as input, uses stored context, and returns feedback.
    """

    response = client.chat.complete(
        model=model,
        messages=[
            {
                "role": "system",
                "content": "You are a expert IELTS instructor. A student has provided you with an paragraph according to the title for an writing test. Please provide short feedback on the answer.",
                "role": "user",
                "content": f"Title: {item.title} \nAnswer: {item.answer}\nFeedback:",
            },
        ]
    )

    feedback = response.choices[0].message.content
    return FeedbackResponse(feedback=feedback)

@app.get("/listening_test", response_model=FeedbackResponse)
async def listening_test(
    question: str = Query(..., description="The query based on the given context."),
    answer: str = Query(..., description="The response provided by the user.")
):
    """
    GET endpoint for the reading test evaluation.
    Takes question and answer as input, uses stored context, and returns feedback.
    """
    context = context_storage.get("context")
    if not context:
        raise HTTPException(status_code=400, detail="Context is not set. Please set the context first.")

    response = client.chat.complete(
        model=model,
        messages=[
            {
                "role": "system",
                "content": "You are a expert IELTS instructor. A student has provided you with the following question and answer. Please provide short feedback on the answer.",
                "role": "user",
                "content": f"Context: {context}\nQuestion: {question}\nAnswer: {answer}\nFeedback:",
            },
        ]
    )

    feedback = response.choices[0].message.content
    return FeedbackResponse(feedback=feedback)