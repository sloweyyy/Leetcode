/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const res = [];
    let r = rStart;
    let c = cStart;
    let len = 0;
    let d = 0;
    let step = 1;
    while (res.length < rows * cols) {
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
            res.push([r, c]);
        }
        if (d === 0) {
            c++;
        } else if (d === 1) {
            r++;
        } else if (d === 2) {
            c--;
        } else {
            r--;
        }
        len++;
        if (len === step) {
            d = (d + 1) % 4;
            if (d === 0 || d === 2) {
                step++;
            }
            len = 0;
        }
    }
    return res;
};
