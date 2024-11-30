/**
 * @param {string} formula
 * @return {string}
 */
const countOfAtoms = (formula) => {
    const stack = [];
    let currentMap = {};
    let index = 0;

    const readNextElement = (i) => {
        if (!formula[i].match(/[A-Z]/)) return null;
        let element = formula[i++];
        while (formula[i]?.match(/[a-z]/)) {
            element += formula[i++];
        }
        return [element, i];
    };

    const readNextDigit = (i) => {
        if (!formula[i]?.match(/[0-9]/)) return [1, i];
        let number = 0;
        while (formula[i]?.match(/[0-9]/)) {
            number = number * 10 + Number(formula[i++]);
        }
        return [number, i];
    };

    while (index < formula.length) {
        if (formula[index] === "(") {
            stack.push(currentMap);
            currentMap = {};
            index++;
        } else if (formula[index] === ")") {
            const [multiplier, newIndex] = readNextDigit(++index);
            index = newIndex;
            Object.keys(currentMap).forEach(
                (key) => (currentMap[key] *= multiplier),
            );
            const lastMap = stack.pop() || {};
            Object.keys(currentMap).forEach((key) => {
                lastMap[key] = (lastMap[key] || 0) + currentMap[key];
            });
            currentMap = lastMap;
        } else {
            const [element, newIndex] = readNextElement(index);
            index = newIndex;
            const [count, newI] = readNextDigit(index);
            index = newI;
            currentMap[element] = (currentMap[element] || 0) + count;
        }
    }

    return Object.entries(currentMap)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .reduce(
            (result, [element, count]) =>
                `${result}${element}${count === 1 ? "" : count}`,
            "",
        );
};
