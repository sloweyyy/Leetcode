/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const map = new Map();
    for (const path of paths) {
        map.set(path[0], path[1]);
    }
    let city = paths[0][0];
    while (map.has(city)) {
        city = map.get(city);
    }
    return city;
};