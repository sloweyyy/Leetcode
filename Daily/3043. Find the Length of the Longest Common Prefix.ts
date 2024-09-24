function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const prefixSet = new Set<string>();
    let maxPrefixLength = 0;

    function generatePrefixes(num: number): string[] {
        const str = num.toString();
        const prefixes = [];
        for (let i = 1; i <= str.length; i++) {
            prefixes.push(str.substring(0, i));
        }
        return prefixes;
    }

    for (const num of arr1) {
        const prefixes = generatePrefixes(num);
        for (const prefix of prefixes) {
            prefixSet.add(prefix);
        }
    }

    for (const num of arr2) {
        const prefixes = generatePrefixes(num);
        for (const prefix of prefixes) {
            if (prefixSet.has(prefix)) {
                maxPrefixLength = Math.max(maxPrefixLength, prefix.length);
            }
        }
    }

    return maxPrefixLength;
}
