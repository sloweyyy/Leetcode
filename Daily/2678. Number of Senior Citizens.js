/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let count = 0;
    for (let i = 0; i < details.length; i++) {
        let ageString = details[i].match(/\D(\d{2})/);
        if (ageString) {
            let age = parseInt(ageString[1]);
            if (age > 60) {
                count++;
            }
        }
    }
    return count;
};
