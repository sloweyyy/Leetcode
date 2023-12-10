/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = 0;
    while (n > 1) {
        matches += Math.floor(n / 2);
        n = Math.ceil(n / 2);
    }
    return matches;
};