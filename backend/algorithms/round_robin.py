def round_robin(processes, quantum=2):
    queue = []
    result = []

    for p in processes:
        p['remaining'] = p['burst']
        queue.append(p)

    current_time = 0

    while queue:
        process = queue.pop(0)

        execute = min(process['remaining'], quantum)
        process['remaining'] -= execute
        current_time += execute

        if process['remaining'] > 0:
            queue.append(process)
        else:
            turnaround = current_time - process['arrival']
            waiting = turnaround - process['burst']

            result.append({
                'pid': process['pid'],
                'waiting_time': waiting,
                'turnaround_time': turnaround
            })

    return result