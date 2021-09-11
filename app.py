from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

@app.route("/get_courses", methods = ["GET", "POST"])
def get_courses():
    return jsonify("hello")
