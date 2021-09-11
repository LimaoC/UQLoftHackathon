from flask import Flask, render_template, jsonify, request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/get_courses", methods = ["GET", "POST"])
def get_courses():
    if request.method == "GET":
        return jsonify("hello")
    else:
        code = request.json["courseCode"]
        print(code)
        return jsonify("hello")
