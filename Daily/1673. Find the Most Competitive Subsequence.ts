function mostCompetitive(nums: number[], k: number): number[] {
    const n = nums.length;
    const stack: number[] = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] > nums[i] && stack.length - 1 + n - i >= k) {
            stack.pop();
        }
        if (stack.length < k) {
            stack.push(nums[i]);
        }
    }
    return stack;
};