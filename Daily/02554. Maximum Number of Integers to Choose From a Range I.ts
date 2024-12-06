function maxCount(banned: number[], n: number, maxSum: number): number {
    const bannedSet = new Set(banned);
    let count = 0;
    let currentSum = 0;

    for (let i = 1; i <= n; i++) {
        if (!bannedSet.has(i) && currentSum + i <= maxSum) {
            currentSum += i;
            count++;
        }
    }

    return count;
}
