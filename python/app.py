import os
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    name = os.environ.get('NAME', 'flask')
    return f"<p>Hello, World! from {name}</p>"