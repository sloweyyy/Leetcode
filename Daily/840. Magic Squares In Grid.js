/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            if (isMagic(grid, i, j)) {
                count++;
            }
        }
    }
    return count;
};

function isMagic(grid, r, c) {
    if (grid[r + 1][c + 1] !== 5) {
        return false;
    }
    const count = Array(16).fill(0);
    for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
            count[grid[i][j]]++;
        }
    }
    for (let i = 1; i <= 9; i++) {
        if (count[i] !== 1) {
            return false;
        }
    }
    if (grid[r][c] + grid[r][c + 1] + grid[r][c + 2] !== 15) {
        return false;
    }
    if (grid[r][c] + grid[r + 1][c] + grid[r + 2][c] !== 15) {
        return false;
    }
    if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== 15) {
        return false;
    }
    if (grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== 15) {
        return false;
    }
    return true;
}
