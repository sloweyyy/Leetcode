/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
    let time = 0;
    let wait = 0;
    for (let i = 0; i < customers.length; i++) {
        let start = Math.max(time, customers[i][0]);
        time = start + customers[i][1];
        wait += time - customers[i][0];
    }
    return wait / customers.length;
};
