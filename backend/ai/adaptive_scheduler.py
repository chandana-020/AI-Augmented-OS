def adaptive_scheduler(cpu_load, avg_burst_time):
    if cpu_load > 80:
        return 'Round Robin'

    if avg_burst_time < 5:
        return 'SJF'

    return 'Priority'