function minCost(colors, neededTime) {
    const n = colors.length;
    const memo = new Array(n).fill(-1);
    return calculateMinCost(n - 1, colors, neededTime, memo, 'A', neededTime[n - 1]);
}

function calculateMinCost(i, colorSequence, timeRequired, memo, previousColor, previousTime) {
    if (i < 0) {
        return 0;
    }

    if (memo[i] !== -1) {
        return memo[i];
    }

    if (colorSequence[i] === previousColor) {
        return memo[i] = calculateMinCost(i - 1, colorSequence, timeRequired, memo, colorSequence[i], Math.max(timeRequired[i], previousTime)) + Math.min(timeRequired[i], previousTime);
    } else {
        return memo[i] = calculateMinCost(i - 1, colorSequence, timeRequired, memo, colorSequence[i], timeRequired[i]);
    }
}