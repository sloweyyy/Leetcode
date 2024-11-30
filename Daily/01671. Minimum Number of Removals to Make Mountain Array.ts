function minimumMountainRemovals(nums: number[]): number {
    const n = nums.length;
    const lis = new Array(n).fill(1);
    const lds = new Array(n).fill(1);

    const dp1: number[] = [];
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        let left = 0,
            right = dp1.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (dp1[mid] < num) left = mid + 1;
            else right = mid;
        }
        dp1[left] = num;
        lis[i] = left + 1;
    }

    const dp2: number[] = [];
    for (let i = n - 1; i >= 0; i--) {
        const num = nums[i];
        let left = 0,
            right = dp2.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (dp2[mid] < num) left = mid + 1;
            else right = mid;
        }
        dp2[left] = num;
        lds[i] = left + 1;
    }

    let maxLength = 0;
    for (let i = 1; i < n - 1; i++) {
        if (lis[i] > 1 && lds[i] > 1) {
            maxLength = Math.max(maxLength, lis[i] + lds[i] - 1);
        }
    }

    return n - maxLength;
}
