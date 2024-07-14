var threeConsecutiveOdds = function (arr) {
    let count = 0;

    for (let num of arr) {
        if (num & 1) {
            count++;
            if (count === 3) {
                return true;
            }
        } else {
            count = 0;
        }
    }

    return false;
};
