/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    const m = grid1.length;
    const n = grid1[0].length;
    let count = 0;

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0)
            return true;
        grid2[i][j] = 0;
        let res = grid1[i][j] === 1;
        res = res & dfs(i + 1, j);
        res = res & dfs(i - 1, j);
        res = res & dfs(i, j + 1);
        res = res & dfs(i, j - 1);
        return res;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1) {
                count += dfs(i, j);
            }
        }
    }

    return count;
};
