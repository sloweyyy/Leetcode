/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];

    nums.sort((a, b) => a - b);

    const backtrack = (curr, remaining) => {
        if (remaining.length === 0) {
            result.push(curr);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            if (i > 0 && remaining[i] === remaining[i - 1]) {
                continue;
            }

            backtrack(
                [...curr, remaining[i]],
                [...remaining.slice(0, i), ...remaining.slice(i + 1)],
            );
        }
    };

    backtrack([], nums);

    return result;
};
