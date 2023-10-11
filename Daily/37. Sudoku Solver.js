/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            if (board[row][col] === '.') {
                continue;
            }

            const num = parseInt(board[row][col]) - 1;
            const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            rows[row][num]++;
            cols[col][num]++;
            boxes[box][num]++;

        }

    }

    const solve = (row, col) => {

        if (row === 9) {
            return true;
        }

        if (col === 9) {
            return solve(row + 1, 0);
        }

        if (board[row][col] !== '.') {
            return solve(row, col + 1);
        }

        const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

        for (let num = 0; num < 9; num++) {

            if (rows[row][num] > 0 || cols[col][num] > 0 || boxes[box][num] > 0) {
                continue;
            }

            rows[row][num]++;
            cols[col][num]++;
            boxes[box][num]++;

            board[row][col] = `${num + 1}`;

            if (solve(row, col + 1)) {
                return true;
            }

            rows[row][num]--;
            cols[col][num]--;
            boxes[box][num]--;

            board[row][col] = '.';

        }

        return false;

    };

    solve(0, 0);
};