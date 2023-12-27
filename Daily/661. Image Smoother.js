/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let result = [];
    for (let i = 0; i < img.length; ++i) {
        result.push([]);
        for (let j = 0; j < img[0].length; ++j) {
            let sum = 0;
            let count = 0;
            for (let k = -1; k <= 1; ++k) {
                for (let l = -1; l <= 1; ++l) {
                    if (i + k >= 0 && i + k < img.length && j + l >= 0 && j + l < img[0].length) {
                        sum += img[i + k][j + l];
                        ++count;
                    }
                }
            }
            result[i].push(Math.floor(sum / count));
        }
    }
    return result;
};