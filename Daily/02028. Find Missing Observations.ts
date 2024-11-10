function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const m = rolls.length;
    const total = mean * (m + n);
    let sum = rolls.reduce((a, b) => a + b, 0);
    let remaining = total - sum;
    if (remaining < n || remaining > 6 * n) return [];
    const ans = Array(n).fill(1);
    remaining -= n;
    for (let i = 0; i < n; i++) {
        const add = Math.min(remaining, 5);
        ans[i] += add;
        remaining -= add;
    }
    return ans;
};