from flask import Blueprint, request, jsonify

from ai.recommender import recommend_algorithm
from ai.predictor import predict_performance

ai_bp = Blueprint('ai', __name__)

@ai_bp.route('/ai/recommend', methods=['POST'])
def recommend():
    results = request.json

    recommendation = recommend_algorithm(results)

    return jsonify(recommendation)


@ai_bp.route('/ai/predict', methods=['POST'])
def predict():
    processes = request.json['processes']

    prediction = predict_performance(processes)

    return jsonify(prediction)