function addSpaces(s: string, spaces: number[]): string {
    let result: string[] = [];
    let word = '';
    let i = 0;
    let j = 0;
    while (i < s.length) {
        if (j < spaces.length && i === spaces[j]) {
            result.push(word);
            word = '';
            j++;
        }
        word += s[i];
        i++;
    }
    result.push(word);
    return result.join(' ');
}