/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let total = 0;
    let week = 0;
    let day = 0;
    while (n > 0) {
        total += week + day + 1;
        day++;
        if (day === 7) {
            week++;
            day = 0;
        }
        n--;
    }
    return total;
};
