/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    var targetMap = new Map();
    var arrMap = new Map();

    for (var i = 0; i < target.length; i++) {
        targetMap.set(target[i], (targetMap.get(target[i]) || 0) + 1);
        arrMap.set(arr[i], (arrMap.get(arr[i]) || 0) + 1);
    }

    for (var [key, value] of targetMap) {
        if (arrMap.get(key) !== value) {
            return false;
        }
    }

    return true;
};
