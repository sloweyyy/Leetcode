/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) {
        return "Zero";
    }

    const lessThan20 = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ];

    const tens = [
        "",
        "",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ];

    const thousands = ["", "Thousand", "Million", "Billion"];

    const helper = (num) => {
        if (num === 0) {
            return "";
        } else if (num < 20) {
            return lessThan20[num] + " ";
        } else if (num < 100) {
            return tens[Math.floor(num / 10)] + " " + helper(num % 10);
        } else {
            return (
                lessThan20[Math.floor(num / 100)] +
                " Hundred " +
                helper(num % 100)
            );
        }
    };

    let result = "";
    let i = 0;
    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
};
