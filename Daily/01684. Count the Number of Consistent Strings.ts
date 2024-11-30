function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedSet = new Set(allowed.split(""));
    return words.filter((word) =>
        word.split("").every((c) => allowedSet.has(c)),
    ).length;
}
