function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp: number[][] = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0),
    );
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) break;
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 1) break;
        dp[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++)
            if (obstacleGrid[i][j] === 0)
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
    return dp[m - 1][n - 1];
}
