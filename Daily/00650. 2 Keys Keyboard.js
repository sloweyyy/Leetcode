/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    var dp = new Array(n + 1).fill(0);
    for (var i = 2; i <= n; i++) {
        dp[i] = i;
        for (var j = i - 1; j > 1; j--) {
            if (i % j === 0) {
                dp[i] = dp[j] + i / j;
                break;
            }
        }
    }
    return dp[n];
};

console.log(minSteps(6));
