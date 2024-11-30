/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1 && i > 0 && j > 0) {
                matrix[i][j] =
                    Math.min(
                        matrix[i - 1][j - 1],
                        matrix[i - 1][j],
                        matrix[i][j - 1],
                    ) + 1;
            }
            count += matrix[i][j];
        }
    }
    return count;
};

let matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
];
console.log(countSquares(matrix)); // 15
