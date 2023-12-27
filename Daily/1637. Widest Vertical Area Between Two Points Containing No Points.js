/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let x = points.map(point => point[0]).sort((a, b) => a - b);
    let max = 0;
    for (let i = 1; i < x.length; ++i) {
        max = Math.max(max, x[i] - x[i - 1]);
    }
    return max;
};