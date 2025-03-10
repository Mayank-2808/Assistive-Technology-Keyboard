from app import app
from flask import request, jsonify, send_file
import os
import io

# Services
from flaskr.services.suggestions import get_suggestions
from flaskr.services.text_to_speech import generate_speech

#
# 1) Root route: simple check
#
@app.route("/")
def index():
    return "Hello from the Assistive Keyboard API!"

#
# 2) Autocomplete
#
@app.route("/api/suggestions", methods=["GET"])
def suggestions():
    """
    GET /api/suggestions?q=<string>
    Returns up to N word suggestions from a large dictionary.
    """
    query = request.args.get("q", "")
    results = get_suggestions(query, limit=5)
    return jsonify({"suggestions": results}), 200

#
# 4) Text to speech
#
@app.route("/api/tts", methods=["POST"])
def tts():
    """
    POST /api/tts
    JSON: { "text": "Hello world" }

    Returns a WAV file read back using pyttsx3 TTS.
    """
    data = request.json or {}
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "No text provided"}), 400

    out_file = generate_speech(text)

    if not os.path.exists(out_file):
        return jsonify({"error": "Failed to generate TTS audio"}), 500

    with open(out_file, "rb") as f:
        audio_data = f.read()

    os.remove(out_file)

    return send_file(
        io.BytesIO(audio_data),
        mimetype="audio/wav",
        as_attachment=False,
        download_name="speech.wav"
    )


#
# Eoute to save user preferences (Hover Feature)
#
@app.route("/api/prefs", methods=["POST"])
def save_prefs():
    """
    POST /api/prefs
    JSON: { "hoverTime": 1000, "keyInputSpeed": 800, ... }
    """
    prefs = request.json or {}
    # Store these preferences somewhere, e.g. in memory or a DB
    # For now, just echo them back:
    return jsonify({"success": True, "prefs": prefs}), 200