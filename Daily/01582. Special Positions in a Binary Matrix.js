/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                let isSpecial = true;
                for (let k = 0; k < mat.length; k++) {
                    if (k !== i && mat[k][j] === 1) {
                        isSpecial = false;
                        break;
                    }
                }
                if (isSpecial) {
                    for (let k = 0; k < mat[0].length; k++) {
                        if (k !== j && mat[i][k] === 1) {
                            isSpecial = false;
                            break;
                        }
                    }
                }
                if (isSpecial) {
                    count++;
                }
            }
        }
    }
    return count;
};
