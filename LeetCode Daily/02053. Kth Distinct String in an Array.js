/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    const countMap = new Map();

    for (const str of arr) {
        countMap.set(str, (countMap.get(str) || 0) + 1);
    }

    let distinctCount = 0;

    for (const str of arr) {
        if (countMap.get(str) === 1) {
            distinctCount++;
            if (distinctCount === k) {
                return str;
            }
        }
    }

    return "";
};
