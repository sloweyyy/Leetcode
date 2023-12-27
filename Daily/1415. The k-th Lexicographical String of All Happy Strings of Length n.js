/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const chars = ['a', 'b', 'c'];
    const happyStrings = [];
    const generateHappyStrings = (str) => {
        if (str.length === n) {
            happyStrings.push(str);
            return;
        }
        for (let i = 0; i < chars.length; i++) {
            if (str.length === 0 || str[str.length - 1] !== chars[i]) {
                generateHappyStrings(str + chars[i]);
            }
        }
    };
    generateHappyStrings('');
    return happyStrings[k - 1] || '';
};