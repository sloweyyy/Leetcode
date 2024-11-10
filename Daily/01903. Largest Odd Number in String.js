/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let i = num.length - 1;
    while (i >= 0 && num[i] % 2 === 0) {
        i--;
    }
    return num.substring(0, i + 1);
};