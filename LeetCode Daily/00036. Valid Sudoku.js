/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                continue;
            }

            const num = parseInt(board[row][col]) - 1;
            const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            rows[row][num]++;
            cols[col][num]++;
            boxes[box][num]++;

            if (
                rows[row][num] > 1 ||
                cols[col][num] > 1 ||
                boxes[box][num] > 1
            ) {
                return false;
            }
        }
    }

    return true;
};
