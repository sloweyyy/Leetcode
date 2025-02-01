function waysToSplitArray(nums: number[]): number {
    const mod = 1e9 + 7;
    const prefix = Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    let result = 0;
    const total = prefix[nums.length];
    for (let i = 1; i < nums.length; i++) {
        if (prefix[i] * 2 >= total) {
            result = (result + 1) % mod;
        }
    }
    return result;
}

function binarySearch(prefix: number[], start: number, target: number): number {
    let left = start;
    let right = prefix.length - 1;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (prefix[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
