/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    // -1/3-1/2
    let arr = expression.split(/(?=[+-])/); // ["-1/3", "-1/2"]
    let res = [0, 1]; // [0, 1]
    for (let i = 0; i < arr.length; i++) {
        // i = 0  // i = 1
        let [num, den] = arr[i].split("/"); // num = -1, den = 3 // num = -1, den = 2
        let [a, b] = res; // a = 0, b = 1 // a = -1, b = 3
        let gcd = getGCD(b, den); // gcd = 1 // gcd = 1
        console.log(gcd);
        res = [(a * den) / gcd + (b * num) / gcd, (b * den) / gcd]; // res = [-1, 3] // res = [-5, 6]
        let g = getGCD(Math.abs(res[0]), res[1]); // g = 1 // g = 1
        res = [res[0] / g, res[1] / g]; // res = [-1, 3] // res = [-5, 6]
    }
    return res.join("/"); // "-5/6"
};

var getGCD = function (a, b) {
    return b === 0 ? a : getGCD(b, a % b);
};

console.log(fractionAddition("-1/3-1/2")); // "-5/6"
console.log(getGCD(6, 3)); // 1
