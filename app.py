from flask import Flask, render_template, jsonify, request
import requests
from flask_cors import CORS
from helpers import is_valid_course, get_ecp_details, get_paper_data

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
    code = request.json["courseCode"]
    url, course_name, course_description = get_ecp_details(code)
    papers = get_paper_data(code)
    data = {
        "ecp_link" : url,
        "course_name": course_name,
        "course_description": course_description,
        "papers": papers
    }
    return jsonify(data)

@app.route("/get_paper", methods = ["GET", "POST"])
def get_paper():
    course_code = request.json["courseCode"]
    paper = request.json["paper"]
    print(coure_code, paper)
    return jsonify("YOLO")
