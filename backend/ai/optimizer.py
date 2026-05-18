def optimize_quantum(processes):
    avg_burst = sum(
        p['burst'] for p in processes
    ) / len(processes)

    if avg_burst <= 4:
        return 2
    elif avg_burst <= 8:
        return 4
    else:
        return 6