function countFairPairs(nums: number[], lower: number, upper: number): number {
    nums.sort((a, b) => a - b);
    return countPairs(nums, upper) - countPairs(nums, lower - 1);
}

function countPairs(nums: number[], target: number): number {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            count += right - left;
            left++;
        }
    }

    return count;
}
