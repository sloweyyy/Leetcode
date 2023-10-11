function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    const wordCount = words.length;
    const wordLength = words[0].length;
    const totalLength = wordCount * wordLength;
    const wordMap = new Map<string, number>();
    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) ?? 0) + 1);
    }
    for (let i = 0; i <= s.length - totalLength; ++i) {
        const map = new Map<string, number>();
        let j = 0;
        for (; j < wordCount; ++j) {
            const word = s.substr(i + j * wordLength, wordLength);
            if (!wordMap.has(word)) {
                break;
            }
            map.set(word, (map.get(word) ?? 0) + 1);
            if (map.get(word) > wordMap.get(word)) {
                break;
            }
        }
        if (j === wordCount) {
            result.push(i);
        }
    }
    return result;
};