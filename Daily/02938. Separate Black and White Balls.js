/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    let ans = 0;
    let blackCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            ans += blackCount;
        } else {
            blackCount++;
        }
    }
    return ans;
};
