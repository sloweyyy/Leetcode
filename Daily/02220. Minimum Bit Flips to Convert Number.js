/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = (start, goal) => {
    let flipCount = 0;
    let binaryStart;
    let binaryGoal;

    if (start > goal) {
        binaryStart = start.toString(2);
        binaryGoal = goal.toString(2).padStart(binaryStart.length, "0");
    } else {
        binaryStart = goal.toString(2);
        binaryGoal = start.toString(2).padStart(binaryStart.length, "0");
    }

    for (let i = 0; i < binaryStart.length; i++) {
        if (binaryStart[i] !== binaryGoal[i]) {
            flipCount++;
        }
    }

    return flipCount;
};
