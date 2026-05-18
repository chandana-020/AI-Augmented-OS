def first_fit(memory_blocks, process_sizes):
    allocation = [-1] * len(process_sizes)

    for i in range(len(process_sizes)):
        for j in range(len(memory_blocks)):
            if memory_blocks[j] >= process_sizes[i]:
                allocation[i] = j
                memory_blocks[j] -= process_sizes[i]
                break

    return allocation


def best_fit(memory_blocks, process_sizes):
    allocation = [-1] * len(process_sizes)

    for i in range(len(process_sizes)):
        best_index = -1

        for j in range(len(memory_blocks)):
            if memory_blocks[j] >= process_sizes[i]:
                if best_index == -1 or memory_blocks[j] < memory_blocks[best_index]:
                    best_index = j

        if best_index != -1:
            allocation[i] = best_index
            memory_blocks[best_index] -= process_sizes[i]

    return allocation