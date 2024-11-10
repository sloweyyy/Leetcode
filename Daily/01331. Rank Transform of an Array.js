/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const rank = {};
    let r = 1;
    for (const num of sortedArr) {
        if (rank[num] === undefined) {
            rank[num] = r++;
        }
    }
    return arr.map((num) => rank[num]);
};
