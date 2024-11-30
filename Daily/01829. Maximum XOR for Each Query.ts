function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const n = nums.length;
    const res = new Array(n);
    let max = (1 << maximumBit) - 1;
    let xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= nums[i];
        res[n - i - 1] = max ^ xor;
    }
    return res;
}
