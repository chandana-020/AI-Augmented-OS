def recommend_algorithm(results):
    best_algorithm = None
    lowest_waiting = float('inf')

    for name, data in results.items():
        avg_waiting = sum(
            p['waiting_time'] for p in data
        ) / len(data)

        if avg_waiting < lowest_waiting:
            lowest_waiting = avg_waiting
            best_algorithm = name

    return {
        'recommended_algorithm': best_algorithm,
        'average_waiting_time': lowest_waiting
    }