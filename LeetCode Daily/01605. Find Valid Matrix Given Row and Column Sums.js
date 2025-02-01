/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const rows = rowSum.length;
    const cols = colSum.length;
    const result = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= result[i][j];
            colSum[j] -= result[i][j];
        }
    }

    return result;
};
