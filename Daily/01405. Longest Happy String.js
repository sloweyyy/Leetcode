/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const pq = [];
    if (a > 0) pq.push([a, "a"]);
    if (b > 0) pq.push([b, "b"]);
    if (c > 0) pq.push([c, "c"]);
    pq.sort((x, y) => y[0] - x[0]);

    let result = "";

    while (pq.length > 0) {
        pq.sort((x, y) => y[0] - x[0]);
        let [count1, char1] = pq.shift();

        if (result.length >= 2 && result.endsWith(char1.repeat(2))) {
            if (pq.length === 0) break;

            let [count2, char2] = pq.shift();
            result += char2;
            if (--count2 > 0) pq.push([count2, char2]);

            pq.push([count1, char1]);
        } else {
            result += char1;
            if (--count1 > 0) pq.push([count1, char1]);
        }
    }

    return result;
};
