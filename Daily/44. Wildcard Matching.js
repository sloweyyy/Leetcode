/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    const dp = new Array(s.length + 1).fill(0).map(() => new Array(p.length + 1).fill(false));

    dp[0][0] = true;

    for (let i = 1; i <= p.length; i++) {

        if (p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 1];
        }

    }

    for (let i = 1; i <= s.length; i++) {

        for (let j = 1; j <= p.length; j++) {

            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }

        }

    }

    return dp[s.length][p.length];
};