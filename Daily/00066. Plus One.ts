function plusOne(digits: number[]): number[] {
    const n = digits.length;
    const dp: number[][] = Array.from({ length: n }, () =>
        Array.from({ length: 2 }, () => 0),
    );
    dp[0][0] = 1;
    dp[0][1] = digits[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][1] === 0 ? 1 : 0;
        dp[i][1] = dp[i - 1][1] === 0 ? digits[i] : 0;
    }
    if (dp[n - 1][0] === 1) return [1, ...digits];
    dp[n - 1][1]++;
    for (let i = n - 1; i >= 1; i--) {
        if (dp[i][1] === 10) {
            dp[i][1] = 0;
            dp[i - 1][1]++;
        }
    }
    return dp.map((d) => d[1]);
}
