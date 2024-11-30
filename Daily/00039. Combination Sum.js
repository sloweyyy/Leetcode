/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    const dfs = (index, sum, path) => {
        if (sum === target) {
            result.push(path);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            dfs(i, sum + candidates[i], [...path, candidates[i]]);
        }
    };

    dfs(0, 0, []);

    return result;
};
