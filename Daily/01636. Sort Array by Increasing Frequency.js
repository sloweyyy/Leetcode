/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let freq = {};
    let freqArr = [];
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]] === undefined) {
            freq[nums[i]] = 1;
        } else {
            freq[nums[i]]++;
        }
    }

    for (let key in freq) {
        freqArr.push([key, freq[key]]);
    }

    freqArr.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });

    for (let i = 0; i < freqArr.length; i++) {
        for (let j = 0; j < freqArr[i][1]; j++) {
            res.push(parseInt(freqArr[i][0]));
        }
    }

    return res;
};
