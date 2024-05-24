from flask import Flask, request, jsonify
import redis
import os

app = Flask(__name__)
redis_host = os.environ.get('REDIS_HOST', 'localhost')
redis_port = os.environ.get('REDIS_PORT', 6379)
redis_client = redis.StrictRedis(host=redis_host, port=redis_port, decode_responses=True)

@app.route('/')
def home():
    return "Welcome to the Flask-Redis App!"

@app.route('/set/<key>/<value>', methods=['GET'])
def set_value(key, value):
    redis_client.set(key, value)
    return f"Set {key} to {value}"

@app.route('/get/<key>', methods=['GET'])
def get_value(key):
    value = redis_client.get(key)
    if value:
        return jsonify({key: value})
    else:
        return jsonify({key: None}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
