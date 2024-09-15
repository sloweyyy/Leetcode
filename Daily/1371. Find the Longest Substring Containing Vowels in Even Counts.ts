function findTheLongestSubstring(s: string): number {
    const vowels = 'aeiou';
    const vowelIndices = new Map<string, number>();
    for (let i = 0; i < vowels.length; i++) {
        vowelIndices.set(vowels[i], i);
    }

    const firstOccurrence = new Map<number, number>();
    firstOccurrence.set(0, -1);

    let longest = 0;
    let mask = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (vowelIndices.has(char)) {
            mask ^= 1 << vowelIndices.get(char);
        }

        if (!firstOccurrence.has(mask)) {
            firstOccurrence.set(mask, i);
        }

        longest = Math.max(longest, i - firstOccurrence.get(mask));
    }

    return longest;
};