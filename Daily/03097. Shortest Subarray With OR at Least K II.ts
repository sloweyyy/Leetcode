function minimumSubarrayLength(nums: number[], k: number): number {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let minLen = n + 1;
    const deque = [];
    for (let i = 0; i <= n; i++) {
        while (deque.length && prefixSum[i] - prefixSum[deque[0]] >= k) {
            minLen = Math.min(minLen, i - deque.shift());
        }

        while (deque.length && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);
    }

    return minLen === n + 1 ? -1 : minLen;
};