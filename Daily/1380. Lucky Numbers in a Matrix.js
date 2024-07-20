/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rowMins = new Array(rows).fill(Infinity);
    const colMaxs = new Array(cols).fill(-Infinity);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rowMins[i] = Math.min(rowMins[i], matrix[i][j]);
            colMaxs[j] = Math.max(colMaxs[j], matrix[i][j]);
        }
    }

    const result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === rowMins[i] && matrix[i][j] === colMaxs[j]) {
                result.push(matrix[i][j]);
            }
        }
    }

    return result;
};
