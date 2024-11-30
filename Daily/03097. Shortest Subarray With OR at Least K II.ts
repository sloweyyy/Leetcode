function minimumSubarrayLength(nums: number[], k: number): number {
    const n = nums.length;
    let minLen = Infinity;
    let orResults = new Map<number, number>(); // Map of OR value to subarray length

    for (let i = 0; i < n; i++) {
        const newOrResults = new Map<number, number>();
        newOrResults.set(nums[i], 1);

        for (const [val, len] of orResults) {
            const newVal = val | nums[i];
            const newLen = len + 1;
            if (
                !newOrResults.has(newVal) ||
                newOrResults.get(newVal)! > newLen
            ) {
                newOrResults.set(newVal, newLen);
            }
        }

        orResults = newOrResults;

        for (const [val, len] of orResults) {
            if (val >= k) {
                minLen = Math.min(minLen, len);
            }
        }
    }

    return minLen === Infinity ? -1 : minLen;
}
