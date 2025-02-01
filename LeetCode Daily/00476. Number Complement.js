/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let mask = (1 << num.toString(2).length) - 1;
    return num ^ mask;
};

console.log(findComplement(5)); // 2
