function maxScore(s: string): number {
    let max = 0;
    let zeros = 0;
    let ones = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            ones++;
        }
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            zeros++;
        } else {
            ones--;
        }
        max = Math.max(max, zeros + ones);
    }
    return max;
}
