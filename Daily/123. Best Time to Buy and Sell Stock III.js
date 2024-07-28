/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy1 = Infinity;
    let buy2 = Infinity;
    let sell1 = 0;
    let sell2 = 0;

    for (let price of prices) {
        buy1 = Math.min(buy1, price);
        sell1 = Math.max(sell1, price - buy1);
        buy2 = Math.min(buy2, price - sell1);
        sell2 = Math.max(sell2, price - buy2);
    }

    return sell2;
};
