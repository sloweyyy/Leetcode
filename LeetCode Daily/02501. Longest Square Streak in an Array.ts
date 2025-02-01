function longestSquareStreak(nums: number[]): number {
    const numSet = new Set(nums);
    let maxStreak = 0;

    for (const num of nums) {
        let current = num;
        let streak = 0;

        while (numSet.has(current)) {
            streak++;
            current = current * current;
        }

        maxStreak = Math.max(maxStreak, streak);
    }

    return maxStreak > 1 ? maxStreak : -1;
}
