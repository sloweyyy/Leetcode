var minDays = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    if (!isConnected(grid, m, n)) {
        return 0;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                if (!isConnected(grid, m, n)) {
                    return 1;
                }
                grid[i][j] = 1;
            }
        }
    }

    return 2;
};

function isConnected(grid, m, n) {
    let islandCount = 0;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    function dfs(i, j) {
        const stack = [[i, j]];
        while (stack.length > 0) {
            const [x, y] = stack.pop();
            if (
                x < 0 ||
                x >= m ||
                y < 0 ||
                y >= n ||
                grid[x][y] === 0 ||
                visited[x][y]
            ) {
                continue;
            }
            visited[x][y] = true;
            for (const [dx, dy] of directions) {
                stack.push([x + dx, y + dy]);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                islandCount++;
                if (islandCount > 1) return false;
                dfs(i, j);
            }
        }
    }

    return islandCount === 1;
}
