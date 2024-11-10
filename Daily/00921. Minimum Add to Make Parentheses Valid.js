/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                count++;
            }
        }
    }
    return count + stack.length;
};