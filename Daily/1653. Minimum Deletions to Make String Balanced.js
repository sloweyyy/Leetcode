/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            a++;
        } else {
            b++;
        }
    }
    let result = Math.min(a, b);
    let aCount = 0;
    let bCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            aCount++;
        } else {
            bCount++;
        }
        result = Math.min(result, a - aCount + bCount);
    }
    return result;
};
