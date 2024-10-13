/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const events = [];
    for (let i = 0; i < nums.length; i++) {
        for (const num of nums[i]) {
            events.push([num, i]);
        }
    }
    events.sort((a, b) => a[0] - b[0]);
    const freq = new Array(nums.length).fill(0);
    let left = 0, right = 0, minRange = Infinity, minLeft = 0, minRight = 0, count = 0;
    while (right < events.length) {
        if (freq[events[right][1]] === 0) {
            count++;
        }
        freq[events[right][1]]++;
        while (count === nums.length) {
            if (events[right][0] - events[left][0] < minRange) {
                minRange = events[right][0] - events[left][0];
                minLeft = events[left][0];
                minRight = events[right][0];
            }
            freq[events[left][1]]--;
            if (freq[events[left][1]] === 0) {
                count--;
            }
            left++;
        }
        right++;
    }
    return [minLeft, minRight];
};