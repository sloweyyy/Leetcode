/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
    const len = n.length;
    const i = len % 2 === 0 ? len / 2 - 1 : Math.floor(len / 2);
    const firstHalf = BigInt(n.substring(0, i + 1));

    const possibilities = [];
    possibilities.push(halfToPalindrome(firstHalf, len % 2 === 0));
    possibilities.push(halfToPalindrome(firstHalf + 1n, len % 2 === 0));
    possibilities.push(halfToPalindrome(firstHalf - 1n, len % 2 === 0));
    possibilities.push(BigInt(10) ** BigInt(len - 1) - 1n);
    possibilities.push(BigInt(10) ** BigInt(len) + 1n);

    let diff = BigInt(Number.MAX_VALUE),
        res = 0n;
    const nl = BigInt(n);
    for (const cand of possibilities) {
        if (cand === nl) continue;
        const currentDiff = cand > nl ? cand - nl : nl - cand;
        if (currentDiff < diff) {
            diff = currentDiff;
            res = cand;
        } else if (currentDiff === diff) {
            res = cand < res ? cand : res;
        }
    }

    return res.toString();
};

var halfToPalindrome = function (left, even) {
    let res = left;
    if (!even) left = left / 10n;
    while (left > 0n) {
        res = res * 10n + (left % 10n);
        left = left / 10n;
    }
    return res;
};

console.log(nearestPalindromic("807045053224792883"));
