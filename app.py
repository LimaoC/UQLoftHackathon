from flask import Flask, render_template, jsonify, request, send_file
import requests
from flask_cors import CORS
from helpers import is_valid_course, get_ecp_details, get_paper_data

import os

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))

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
    year, sem = paper.split(" - ")
    file = f"{course_code}_{year}_sem{sem}"
    return jsonify("lewisjluck.pythonaywhere.com/paper?file=" + file)

@app.route("/paper", methods = ["GET", "POST"])
def serve_paper():
    file = request.args.get("file")
    print(file)
    return send_file(os.path.join(THIS_FOLDER, file), mimetype="application/pdf", cache_timeout=0)
