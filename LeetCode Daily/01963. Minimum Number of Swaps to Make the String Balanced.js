/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[") {
            stack.push("[");
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                count++;
            }
        }
    }
    return Math.ceil(count / 2);
};
