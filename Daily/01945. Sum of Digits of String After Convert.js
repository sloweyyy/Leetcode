/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let num = s
        .split("")
        .map((c) => c.charCodeAt(0) - 96)
        .join("");
    while (k--) {
        num = num
            .split("")
            .reduce((acc, cur) => acc + +cur, 0)
            .toString();
    }
    return +num;
};
