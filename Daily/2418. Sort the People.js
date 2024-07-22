/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const people = names.map((name, i) => ({ name, height: heights[i] }));
    people.sort((a, b) => b.height - a.height) || a.name.localeCompare(b.name);
    return people.map((person) => person.name);
};
