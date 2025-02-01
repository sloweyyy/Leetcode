function vowelStrings(words: string[], queries: number[][]): number[] {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const prefix = Array(words.length + 1).fill(0);
    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
        if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
            prefix[i + 1] = prefix[i] + 1;
        } else {
            prefix[i + 1] = prefix[i];
        }
    }
    const result: number[] = [];
    for (const [l, r] of queries) {
        result.push(prefix[r + 1] - prefix[l]);
    }
    return result;
}
