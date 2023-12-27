/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    }
    let max = -1;
    for (let key in map) {
        if (map[key] === Number(key)) {
            max = Math.max(max, map[key]);
        }
    }
    return max;
};