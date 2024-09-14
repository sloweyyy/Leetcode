function xorQueries(arr: number[], queries: number[][]): number[] {
    const xorPrefixes = [0];
    for (let num of arr) {
        xorPrefixes.push(xorPrefixes[xorPrefixes.length - 1] ^ num);
    }

    return queries.map(query => xorPrefixes[query[1] + 1] ^ xorPrefixes[query[0]]);
};