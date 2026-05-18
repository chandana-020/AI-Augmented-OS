from flask import Flask, request, jsonify
from flask_cors import CORS

from algorithms.fcfs import fcfs
from algorithms.sjf import sjf
from algorithms.round_robin import round_robin

from ai.recommender import recommend_algorithm
from ai.predictor import predict_cpu_load
from ai.optimizer import optimize_quantum

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return jsonify({
        'message': 'AI-Augmented OS Backend Running'
    })


@app.route('/schedule', methods=['POST'])
def schedule():

    data = request.json

    algorithm = data['algorithm']
    processes = data['processes']

    if algorithm == 'FCFS':
        result = fcfs(processes)

    elif algorithm == 'SJF':
        result = sjf(processes)

    elif algorithm == 'RR':
        quantum_data = optimize_quantum(processes)
        quantum = quantum_data['optimized_quantum']
        result = round_robin(processes, quantum)

    else:
        return jsonify({'error': 'Invalid Algorithm'})

    recommendation = recommend_algorithm(processes)
    prediction = predict_cpu_load(processes)

    return jsonify({
        'schedule_result': result,
        'ai_recommendation': recommendation,
        'cpu_prediction': prediction
    })


if __name__ == '__main__':
    app.run(debug=True)