import streamlit as st
import sounddevice as sd
import numpy as np
import wave
import os
from mistralai import Mistral
from transcriber import WhisperTranscriber
from datetime import datetime

# Initialize Whisper Transcriber and Mistral Client
transcriber = WhisperTranscriber()
api_key = os.getenv("MISTRAL_API_KEY")
model_name = "mistral-large-latest"
client = Mistral(api_key='z1iRqBLr21xfbb0ICldLgclK3hn1eIHG')

# Global conversation logs
conversation_logs = []

# Function to interact with Mistral model
def get_mistral_response(transcription, chat_history):
    context = """
    ## Topic : Free time	
    ## Questions:
        - Do you have a lot of free time?
        - Do you spend your free time outside?
        - What sort of things do you like doing outside?
        - Is there a free time activity you would like to try in the future?
    """
    messages = [
        {
            "role": "system",
            "content": (
                "You are an expert IELTS speaker conducting a mock test for a student preparing for their IELTS exam. "
                "Use the provided context to ask the student relevant questions."
            ),
        },
        {"role": "user", "content": f"Context: {context}\nChat History: {chat_history}\nQuestion:"},
    ]
    response = client.chat.complete(
        model=model_name,
        messages=messages
    )
    response_content = response.choices[0].message.content
    return response_content

# Function to record audio
def record_audio(filename, duration=5, fs=44100):
    st.info("Recording... Speak now!")
    recording = sd.rec(int(duration * fs), samplerate=fs, channels=2, dtype=np.int16)
    sd.wait()  # Wait until recording is finished
    st.info("Recording complete. Processing...")
    # Save the recorded audio to a file
    with wave.open(filename, "wb") as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(fs)
        wf.writeframes(recording.tobytes())
    return filename

# Function to log conversation
def log_conversation(user_input, model_response):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    conversation_logs.append({
        "timestamp": timestamp,
        "user_input": user_input,
        "model_response": model_response
    })

# Streamlit App Layout
st.title("IELTS Mock Test - Audio to Text and Response")
st.markdown(
    """
    This application records your audio, transcribes it, and provides feedback based on IELTS-style questions.
    Perfect for improving speaking skills and preparing for exams!
    """
)

# Sidebar for navigation
st.sidebar.title("Navigation")
options = ["Home", "Conversation Logs", "About"]
choice = st.sidebar.radio("Select a page:", options)

if choice == "Home":
    st.subheader("Record and Analyze Your Speaking Skills")

    # Button to start audio recording
    if st.button("Record Audio"):
        audio_file = "temp_audio.wav"
        record_audio(audio_file)

        # Transcribe the recorded audio using Whisper
        transcription = transcriber.transcribe(audio_file)
        st.success("Transcription complete!")
        st.subheader("Your Transcription:")
        st.write(transcription)

        # Get response from Mistral model
        st.subheader("Model Response:")
        response = get_mistral_response(transcription, conversation_logs)
        st.write(response)

        # Log conversation
        log_conversation(transcription, response)

elif choice == "Conversation Logs":
    st.subheader("Conversation Logs")
    if conversation_logs:
        for log in conversation_logs:
            st.markdown(f"**[{log['timestamp']}]**")
            st.markdown(f"- **User:** {log['user_input']}")
            st.markdown(f"- **Model:** {log['model_response']}")
            st.markdown("---")
    else:
        st.info("No conversation logs available yet.")

elif choice == "About":
    st.subheader("About This Application")
    st.write(
        """
        This application uses cutting-edge AI technologies like Whisper for transcription 
        and the Mistral model for generating conversational responses. 
        It is designed to help users improve their speaking skills through interactive mock tests.
        """
    )
