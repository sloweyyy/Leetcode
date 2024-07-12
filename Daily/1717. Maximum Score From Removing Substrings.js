var maximumGain = function (s, x, y) {
    let stack = [];
    let result = 0;
    let [a, b] = x > y ? ["ab", "ba"] : ["ba", "ab"];
    let [aScore, bScore] = x > y ? [x, y] : [y, x];

    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1] === a[0] && s[i] === a[1]) {
            result += aScore;
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    let newStack = [];
    for (let i = 0; i < stack.length; i++) {
        if (
            newStack.length &&
            newStack[newStack.length - 1] === b[0] &&
            stack[i] === b[1]
        ) {
            result += bScore;
            newStack.pop();
        } else {
            newStack.push(stack[i]);
        }
    }

    return result;
};
