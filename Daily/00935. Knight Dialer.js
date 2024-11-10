/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const mod = 1000000007;
    const map = {
        0: [4, 6],
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [0, 3, 9],
        5: [],
        6: [0, 1, 7],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
    };
    let dp = new Array(10).fill(1);
    let temp = new Array(10).fill(0);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < map[j].length; k++) {
                temp[j] += dp[map[j][k]];
                temp[j] %= mod;
            }
        }
        dp = [...temp];
        temp.fill(0);
    }
    let res = 0;
    for (let i = 0; i < 10; i++) {
        res += dp[i];
        res %= mod;
    }
    return res;
};