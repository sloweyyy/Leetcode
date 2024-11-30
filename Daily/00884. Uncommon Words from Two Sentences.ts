function uncommonFromSentences(s1: string, s2: string): string[] {
    const words = (s1 + " " + s2).split(" ");
    const wordCount = new Map<string, number>();
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    return Array.from(wordCount.entries())
        .filter(([word, count]) => count === 1)
        .map(([word, _]) => word);
}
