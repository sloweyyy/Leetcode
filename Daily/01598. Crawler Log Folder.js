/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let depth = 0;
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === "../") {
            if (depth > 0) {
                depth--;
            }
        } else if (logs[i] !== "./") {
            depth++;
        }
    }
    return depth;
};
