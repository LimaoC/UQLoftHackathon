from flask import Flask, render_template, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/get_courses", methods = ["GET", "POST"])
def get_courses():
    return jsonify("hello")
