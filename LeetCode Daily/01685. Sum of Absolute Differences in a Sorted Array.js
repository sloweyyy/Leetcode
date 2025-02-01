/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    let n = nums.length;
    let sum = 0;
    let res = [];
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        sum -= nums[i];
        res[i] = nums[i] * i - leftSum + sum - nums[i] * (n - i - 1);
        leftSum += nums[i];
    }
    return res;
};
