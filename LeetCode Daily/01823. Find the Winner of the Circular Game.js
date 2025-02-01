/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let index = 0;
    while (arr.length > 1) {
        index = (index + k - 1) % arr.length;
        arr.splice(index, 1);
    }
    return arr[0];
};
