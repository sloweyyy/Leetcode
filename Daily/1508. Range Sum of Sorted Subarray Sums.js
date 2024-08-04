/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    var mod = 1000000007;
    var sum = [];
    var sums = [];

    for (var i = 0; i < n; i++) {
        var s = 0;
        for (var j = i; j < n; j++) {
            s += nums[j];
            sum.push(s);
        }
    }

    sum.sort((a, b) => a - b);

    for (var i = 0; i < sum.length; i++) {
        sums.push((sums[i - 1] || 0) + sum[i]);
    }

    return (sums[right - 1] - (sums[left - 2] || 0)) % mod;
};
