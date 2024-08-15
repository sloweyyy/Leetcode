/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let left = 0;
    let right = nums[n - 1] - nums[0];
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        let j = 0;
        for (let i = 0; i < n; i++) {
            while (j < n && nums[j] - nums[i] <= mid) {
                j++;
            }
            count += j - i - 1;
        }
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};
