/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    const n = chalk.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += chalk[i];
        if (sum > k) {
            return i;
        }
    }
    k = k % sum;
    for (let i = 0; i < n; i++) {
        k -= chalk[i];
        if (k < 0) {
            return i;
        }
    }
    return -1;
};
