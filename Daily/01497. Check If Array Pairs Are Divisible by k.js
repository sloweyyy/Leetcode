/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    const freq = new Array(k).fill(0);
    for (const num of arr) {
        freq[((num % k) + k) % k]++;
    }
    if (freq[0] % 2 !== 0) {
        return false;
    }
    for (let i = 1; i < k; i++) {
        if (freq[i] !== freq[k - i]) {
            return false;
        }
    }
    return true;
};
