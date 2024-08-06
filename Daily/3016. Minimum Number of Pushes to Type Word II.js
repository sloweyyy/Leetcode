/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = (word) => {
    const letterFreq = new Array(26).fill(0);
    for (const char of word) {
        letterFreq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    letterFreq.sort((a, b) => b - a);

    let totalPresses = 0;
    for (let i = 0; i < 26; i++) {
        if (letterFreq[i] === 0) break;
        totalPresses += Math.floor(i / 8 + 1) * letterFreq[i];
    }

    return totalPresses;
};
