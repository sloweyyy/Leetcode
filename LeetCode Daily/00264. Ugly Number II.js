/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    var dp = new Array(n);
    dp[0] = 1;
    var i2 = 0,
        i3 = 0,
        i5 = 0;
    for (var i = 1; i < n; i++) {
        var next2 = dp[i2] * 2,
            next3 = dp[i3] * 3,
            next5 = dp[i5] * 5;
        dp[i] = Math.min(next2, Math.min(next3, next5));
        if (dp[i] === next2) {
            i2++;
            console.log("i2 " + i2);
        }
        if (dp[i] === next3) {
            i3++;
            console.log("i3 " + i3);
        }
        if (dp[i] === next5) {
            i5++;
            console.log("i5 " + i5);
        }
        console.log(dp);
    }
    return dp[n - 1];
};

console.log(nthUglyNumber(30)); // 12
