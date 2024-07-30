/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
    let count = 0;
    const n = rating.length;

    for (let j = 0; j < n; j++) {
        let lessLeft = 0,
            moreLeft = 0,
            lessRight = 0,
            moreRight = 0;

        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) lessLeft++;
            if (rating[i] > rating[j]) moreLeft++;
        }

        for (let k = j + 1; k < n; k++) {
            if (rating[k] < rating[j]) lessRight++;
            if (rating[k] > rating[j]) moreRight++;
        }

        count += lessLeft * moreRight + moreLeft * lessRight;
    }

    return count;
};
