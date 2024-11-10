/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [];
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(str);
            str = "";
        } else if (s[i] === ")") {
            str = str.split("").reverse().join("");
            str = stack.pop() + str;
        } else {
            str += s[i];
        }
    }
    return str;
};
