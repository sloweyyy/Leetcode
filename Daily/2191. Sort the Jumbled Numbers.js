/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
    const getMappedValue = (num) => {
        return parseInt(
            num
                .toString()
                .split("")
                .map((digit) => mapping[digit])
                .join("")
        );
    };

    let mappedNums = nums.map((num) => ({
        original: num,
        mapped: getMappedValue(num),
    }));

    mappedNums.sort((a, b) => {
        if (a.mapped === b.mapped) {
            return 0;
        }
        return a.mapped - b.mapped;
    });

    return mappedNums.map((item) => item.original);
};
