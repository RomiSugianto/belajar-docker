import socket
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    """Fuction to print hostname"""
    hostname = socket.gethostname()
    return f"Hello from {hostname}!\n"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
