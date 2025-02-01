function numWays(steps: number, arrLen: number): number {
    const MOD = 1e9 + 7;
    const maxPos = Math.min(steps, arrLen - 1);
    const dp = new Array(maxPos + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= steps; i++) {
        const nextDp = new Array(maxPos + 1).fill(0);
        for (let j = 0; j <= maxPos; j++) {
            nextDp[j] = dp[j];
            if (j > 0) {
                nextDp[j] = (nextDp[j] + dp[j - 1]) % MOD;
            }
            if (j < maxPos) {
                nextDp[j] = (nextDp[j] + dp[j + 1]) % MOD;
            }
        }
        dp.splice(0, maxPos + 1, ...nextDp);
    }
    return dp[0];
}
