function shortestSubarray(nums: number[], k: number): number {
  let prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i]);
  }

  let result = Number.MAX_SAFE_INTEGER;
  let deque: number[] = [];
  for (let i = 0; i < prefixSum.length; i++) {
    while (deque.length && prefixSum[i] - prefixSum[deque[0]] >= k) {
      result = Math.min(result, i - deque.shift()!);
    }
    while (deque.length && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
  }

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};