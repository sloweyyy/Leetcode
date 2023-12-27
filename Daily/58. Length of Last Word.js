/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim(); 
    let arr = trimmedString.split(' ');
    let lastWord = arr[arr.length - 1];
    return lastWord.length;
};