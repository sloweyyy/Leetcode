/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

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

            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }

            dfs(i + 1, sum + candidates[i], [...path, candidates[i]]);
        }

    };

    candidates.sort((a, b) => a - b);

    dfs(0, 0, []);

    return result;
};