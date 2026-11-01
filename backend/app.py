
import os
from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv
from google import genai

# Load the API key from backend/.env
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(os.path.dirname(BASE_DIR), "frontend")

load_dotenv(os.path.join(BASE_DIR, ".env"))

# Configure Gemini
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key) if api_key else None

# Serve the frontend using Flask
app = Flask(__name__, static_folder=FRONTEND_DIR, static_url_path="")


@app.route("/")
def home():
    return send_from_directory(FRONTEND_DIR, "index.html")


@app.route("/api/generate", methods=["POST"])
def generate_message():
    try:
        if client is None:
            return jsonify({"error": "Gemini API key is missing. Check backend/.env"}), 500

        data = request.get_json() or {}

        occasion = data.get("occasion", "Birthday")
        name = data.get("name", "Dear Friend")
        relationship = data.get("relationship", "friend")
        tone = data.get("tone", "warm")
        sender = data.get("sender", "")
        details = data.get("details", "")

        prompt = f"""
        Write a personalized greeting card message.

        Occasion: {occasion}
        Recipient: {name}
        Relationship: {relationship}
        Tone: {tone}
        Sender: {sender}
        Personal details: {details}

        Make the message natural, heartfelt and suitable
        for a greeting card. Return only the greeting message.
        """

        response = client.models.generate_content(
            model="gemini-3.8-flash",
            contents=prompt
        )

        return jsonify({"message": response.text.strip()})

    except Exception:
        app.logger.exception("Greeting generation failed")
        return jsonify({
            "error": "Could not generate the greeting. Check the backend terminal."
        }), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)