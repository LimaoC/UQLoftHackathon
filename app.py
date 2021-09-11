from flask import Flask, render_template, jsonify, request
import requests
from flask_cors import CORS
from db import is_valid_course

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/get_courses", methods = ["GET", "POST"])
def get_courses():
    code = request.json["courseCode"]
    print(code)
    is_valid = is_valid_course(code)
    print(is_valid)
    return jsonify(is_valid)


# @app.route("/get_papers", method = ["GET", "POST"])
# def get_papers():
#     if request.method == "POST":
#         code = request.json["courseCode"]
