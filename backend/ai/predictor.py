def predict_cpu_load(processes):

    total_burst = sum(
        p['burst_time'] for p in processes
    )

    if total_burst > 25:
        return 'High CPU Load Expected'

    return 'CPU Load Stable'