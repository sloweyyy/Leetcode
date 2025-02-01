/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let rows = new Array(Math.min(numRows, s.length)).fill("");
    let currRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[currRow] += c;
        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};
