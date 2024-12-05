from fastapi import FastAPI, File, UploadFile, APIRouter
from fastapi.responses import JSONResponse
from PIL import Image
from ultralytics import YOLO
import numpy as np
import io

app = APIRouter()

# Load the YOLO model
model = YOLO("best.pt")
@app.post("/classifier/tomato_ripen/")
async def classify_image(file: UploadFile = File(...)):
    try:
        # Read the file as an image
        image_bytes = await file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

        # Convert the image to a format suitable for YOLO
        image_array = np.array(image)

        # Make predictions with YOLO
        results = model(image_array)
        print(results)
        # Extract predictions
        predictions = results.pandas().xyxy[0]  # YOLO's predictions in a DataFrame

        # Select the top prediction with the highest confidence
        if predictions.empty:
            return JSONResponse(content={"error": "No objects detected in the image."}, status_code=200)

        top_prediction = predictions.loc[predictions['confidence'].idxmax()]
        predicted_class = top_prediction["name"]
        confidence = top_prediction["confidence"]

        return JSONResponse(
            content={
                "class": predicted_class,
                "confidence": float(confidence),
            }
        )
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
