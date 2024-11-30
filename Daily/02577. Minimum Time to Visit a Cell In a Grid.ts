function minimumTime(grid: number[][]): number {
    if (Math.min(grid[0][1], grid[1][0]) > 1) {
        return -1;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    const minHeap = new MinPriorityQueue({ priority: (x) => x[0] });
    minHeap.enqueue([0, 0, 0]); // [time, row, col]
    const visited = new Set<string>();

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    while (!minHeap.isEmpty()) {
        const [time, row, col] = minHeap.dequeue().element;

        if (row === rows - 1 && col === cols - 1) {
            return time;
        }

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const key = `${newRow},${newCol}`;

            if (
                newRow < 0 ||
                newCol < 0 ||
                newRow === rows ||
                newCol === cols ||
                visited.has(key)
            ) {
                continue;
            }

            const wait =
                Math.abs(grid[newRow][newCol] - time) % 2 === 0 ? 1 : 0;
            const newTime = Math.max(grid[newRow][newCol] + wait, time + 1);
            minHeap.enqueue([newTime, newRow, newCol]);
            visited.add(key);
        }
    }
    return -1;
}
