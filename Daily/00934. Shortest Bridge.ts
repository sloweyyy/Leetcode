function shortestBridge(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    const queue: [number, number][] = [];
    let found = false;
    for (let i = 0; i < m; i++) {
        if (found) break;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dfs(grid, i, j, queue);
                found = true;
                break;
            }
        }
    }

    let res = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()!;
            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;
                if (
                    nx < 0 ||
                    nx >= m ||
                    ny < 0 ||
                    ny >= n ||
                    grid[nx][ny] === 2
                )
                    continue;
                if (grid[nx][ny] === 1) return res;
                grid[nx][ny] = 2;
                queue.push([nx, ny]);
            }
        }
        res++;
    }
    return -1;
}

function dfs(
    grid: number[][],
    x: number,
    y: number,
    queue: [number, number][],
): void {
    if (
        x < 0 ||
        x >= grid.length ||
        y < 0 ||
        y >= grid[0].length ||
        grid[x][y] !== 1
    )
        return;
    grid[x][y] = 2;
    queue.push([x, y]);
    dfs(grid, x + 1, y, queue);
    dfs(grid, x - 1, y, queue);
    dfs(grid, x, y + 1, queue);
    dfs(grid, x, y - 1, queue);
}
