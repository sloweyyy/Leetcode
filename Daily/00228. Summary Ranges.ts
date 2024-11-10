function summaryRanges(nums: number[]): string[] {
    const res: string[] = [];
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) continue;
        if (start === i) res.push(`${nums[start]}`);
        else res.push(`${nums[start]}->${nums[i]}`);
        start = i + 1;
    }
    return res;
};