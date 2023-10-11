/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    let result = '1';

    for (let i = 1; i < n; i++) {

        let count = 1;
        let say = '';

        for (let j = 0; j < result.length; j++) {

            if (result[j] === result[j + 1]) {
                count++;
            } else {
                say += `${count}${result[j]}`;
                count = 1;
            }

        }

        result = say;

    }

    return result;
};