/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    const dp = [];
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Map();
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            const prev = dp[j].get(diff) || 0;
            const cur = dp[i].get(diff) || 0;
            dp[i].set(diff, prev + cur + 1);
            total += prev;
        }
    }
    return total;
};
