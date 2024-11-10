/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let map = new Map();
    for (let word of words) {
        for (let c of word) {
            map.set(c, (map.get(c) || 0) + 1);
        }
    }
    for (let v of map.values()) {
        if (v % words.length !== 0) {
            return false;
        }
    }
    return true;
};