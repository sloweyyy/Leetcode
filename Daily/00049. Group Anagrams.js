/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {};

    for (let str of strs) {
        const key = str.split("").sort().join("");

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(str);
    }

    return Object.values(map);
};
