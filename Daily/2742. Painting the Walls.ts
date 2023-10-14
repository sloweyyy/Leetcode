function paintWalls(cost: number[], time: number[]): number {
    const n: number = cost.length;
    const dp: number[] = Array(n + 1).fill(Number.POSITIVE_INFINITY);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        for (let j = n; j >= 1; j--) {
            dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
        }
    }
    return dp[n];
};