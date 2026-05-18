def fcfs(processes):
    processes.sort(key=lambda x: x['arrival'])

    current_time = 0
    result = []

    for process in processes:
        if current_time < process['arrival']:
            current_time = process['arrival']

        waiting_time = current_time - process['arrival']
        turnaround_time = waiting_time + process['burst']

        result.append({
            'pid': process['pid'],
            'waiting_time': waiting_time,
            'turnaround_time': turnaround_time
        })

        current_time += process['burst']

    return result