function maximumSubarraySum(nums: number[], k: number): number {
    let currentSum = 0;
    let maxSum = 0;
    let numCount = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (i >= k) {
            let startNum = nums[i - k];
            numCount.set(startNum, numCount.get(startNum)! - 1);
            if (numCount.get(startNum) === 0) {
                numCount.delete(startNum);
            }
            currentSum -= startNum;
        }

        let endNum = nums[i];
        numCount.set(endNum, (numCount.get(endNum) || 0) + 1);
        currentSum += endNum;

        if (i >= k - 1 && numCount.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}
