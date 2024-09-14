function longestSubarray(nums: number[]): number {
    const maxNum = Math.max(...nums);
    let maxLength = 0;
    let currentLength = 0;

    for (let num of nums) {
        if (num === maxNum) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;
        }
    }

    return maxLength;
};