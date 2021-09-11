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
    course_name, course_description = get_ecp_details(code)
    papers = get_paper_data(code)
    data = {
        "course_name": course_name,
        "course_description": course_description,
        "papers": papers
    }
    #
    # data = {
    #     "course_name": "Introduction to Computer Systems",
    #     "course_description": "Richard Thomas is Cool" ,
    #     "papers": [{"year": 2018, "sem": 2}, {"year": 2019, "sem": 1}]
    # }
    # print(data)
    return jsonify(data)
