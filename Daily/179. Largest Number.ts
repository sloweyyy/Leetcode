function largestNumber(nums: number[]): string {
    const result = nums
        .map(num => num.toString())
        .sort((a, b) => (b + a).localeCompare(a + b))
        .join('');

    return result[0] === '0' ? '0' : result;
};