from flask import Flask, render_template, jsonify, request
import requests
from flask_cors import CORS
from db import is_valid_course

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/get_courses", methods = ["GET", "POST"])
def get_courses():
    return "hello"

@app.route("/is_course_valid", methods = ["GET", "POST"])
def is_course_valid():
    code = request.json["courseCode"]
    return jsonify(is_valid_course(code))


@app.route("/get_course_info", methods = ["GET", "POST"])
def get_papers():
    if request.method == "POST":
        data = {
            "course_name": "Introduction to Computer Systems",
            "course_description": "Richard Thomas is Cool" ,
            "papers": [("2018", 2), ("2017", 1)]
        }
        return jsonify(data)
