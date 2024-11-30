function shortestPalindrome(s: string): string {
    let i = 0;

    for (let j = s.length - 1; j >= 0; j--) {
        if (s[i] === s[j]) {
            i++;
        }
    }

    if (i === s.length) {
        return s;
    }

    const suffix = s.slice(i);
    const prefix = suffix.split("").reverse().join("");
    const mid = shortestPalindrome(s.slice(0, i));

    return prefix + mid + suffix;
}
