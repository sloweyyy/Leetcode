function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) {
        return 0;
    }

    const needleLength = needle.length;
    const haystackLength = haystack.length;

    // Build the bad character table
    const badCharTable: Record<string, number> = {};
    for (let i = 0; i < needleLength - 1; i++) {
        badCharTable[needle[i]] = needleLength - i - 1;
    }

    let i = needleLength - 1; // index for haystack
    let j = needleLength - 1; // index for needle

    while (i < haystackLength) {
        if (haystack[i] === needle[j]) {
            if (j === 0) {
                return i;
            }
            i--;
            j--;
        } else {
            const badCharSkip = badCharTable[haystack[i]] || needleLength;
            i += Math.max(needleLength - j, badCharSkip);
            j = needleLength - 1;
        }
    }

    return -1;
}
