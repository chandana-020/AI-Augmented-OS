def sjf(processes):
    processes.sort(key=lambda x: x['burst'])

    current_time = 0
    result = []

    for process in processes:
        waiting_time = current_time
        turnaround_time = waiting_time + process['burst']

        result.append({
            'pid': process['pid'],
            'waiting_time': waiting_time,
            'turnaround_time': turnaround_time
        })

        current_time += process['burst']

    return result