#!/usr/bin/env python

import delegator

from flask import Flask, request, jsonify, redirect

app = Flask(__name__, static_url_path='', static_folder='ui')

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/custom', methods=['POST'])
def custom():
    print(request.form.get('custom'))
    return jsonify({"success": True})

@app.before_request
def before_request():
    if request.host != '192.168.42.1':
        return redirect('http://192.168.42.1/')

if __name__ == "__main__":
    delegator.run(['wifi-connect', '--portal-listening-port', '45454'], block=False)

    app.run(host='0.0.0.0', port=80)
