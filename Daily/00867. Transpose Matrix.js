/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let result = [];
    let row = matrix.length;
    let col = matrix[0].length;

    for (let i = 0; i < col; i++) {
        result.push([]);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
};