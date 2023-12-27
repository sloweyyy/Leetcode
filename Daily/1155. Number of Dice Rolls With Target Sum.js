/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));
    const mod = 1e9 + 7;
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            for (let l = 1; l <= k; l++) {
                if (j >= l) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - l]) % mod;
                }
            }
        }
    }
    return dp[n][target];
};