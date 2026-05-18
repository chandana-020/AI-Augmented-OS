from flask import Blueprint, request, jsonify

from algorithms.fcfs import fcfs
from algorithms.sjf import sjf
from algorithms.round_robin import round_robin

scheduling_bp = Blueprint('scheduling', __name__)

@scheduling_bp.route('/schedule', methods=['POST'])
def schedule():
    data = request.json

    processes = data['processes']

    fcfs_result = fcfs(processes.copy())
    sjf_result = sjf(processes.copy())
    rr_result = round_robin(processes.copy())

    return jsonify({
        'fcfs': fcfs_result,
        'sjf': sjf_result,
        'round_robin': rr_result
    })