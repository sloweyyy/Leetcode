function countSquares(matrix: number[][]): number {
    const m: number = matrix.length;
    const n: number = matrix[0].length;
    const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let count: number = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] =
                        Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) +
                        1;
                }

                count += dp[i][j];
            }
        }
    }

    return count;
}

const matrix: number[][] = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
];
console.log(countSquares(matrix)); // 15
