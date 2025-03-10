import pyttsx3
import uuid

def generate_speech(text: str) -> str:
    """
    Use pyttsx3 to generate a .wav file from the given text.
    Returns the filename of the generated file.
    """
    engine = pyttsx3.init()
    filename = f"{uuid.uuid4()}.wav"
    engine.save_to_file(text, filename)
    engine.runAndWait()
    return filename