/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (original.length !== m * n) return [];
    const res = [];
    for (let i = 0; i < m; i++) {
        res.push(original.slice(i * n, i * n + n));
    }
    return res;
};
