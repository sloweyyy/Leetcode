/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let total = numBottles;
    while (numBottles >= numExchange) {
        const exchangedBottles = Math.floor(numBottles / numExchange);
        total += exchangedBottles;
        numBottles = exchangedBottles + (numBottles % numExchange);
    }
    return total;
};
