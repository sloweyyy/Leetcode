/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let maxGoodInteger = "";

    for (let i = 0; i <= num.length - 3; i++) {
        const substring = num.substring(i, i + 3);

        if (isGoodInteger(substring) && substring > maxGoodInteger) {
            maxGoodInteger = substring;
        }
    }

    return maxGoodInteger;
};

function isGoodInteger(str) {
    return str[0] === str[1] && str[1] === str[2];
}
