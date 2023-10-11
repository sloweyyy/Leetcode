/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    const n = matrix.length;

    for (let row = 0; row < n; row++) {

        for (let col = row; col < n; col++) {

            const temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;

        }

    }

    for (let row = 0; row < n; row++) {

        for (let col = 0; col < n / 2; col++) {

            const temp = matrix[row][col];
            matrix[row][col] = matrix[row][n - 1 - col];
            matrix[row][n - 1 - col] = temp;

        }

    }
};