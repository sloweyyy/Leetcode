/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
    const n = 26; // Number of letters in the alphabet
    const INF = 1e9; // A large value representing infinity

    // Initialize the cost matrix with infinity
    const costMatrix = Array.from({ length: n }, () => Array(n).fill(INF));

    // Set the cost of changing a character to itself as 0
    for (let i = 0; i < n; i++) {
        costMatrix[i][i] = 0;
    }

    // Populate the cost matrix with given costs
    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - "a".charCodeAt(0);
        const to = changed[i].charCodeAt(0) - "a".charCodeAt(0);
        costMatrix[from][to] = Math.min(costMatrix[from][to], cost[i]);
    }

    // Apply Floyd-Warshall to find the minimum cost between all pairs of characters
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (costMatrix[i][k] < INF && costMatrix[k][j] < INF) {
                    costMatrix[i][j] = Math.min(
                        costMatrix[i][j],
                        costMatrix[i][k] + costMatrix[k][j],
                    );
                }
            }
        }
    }

    let totalCost = 0;

    // Calculate the total cost to convert source to target
    for (let i = 0; i < source.length; i++) {
        const from = source[i].charCodeAt(0) - "a".charCodeAt(0);
        const to = target[i].charCodeAt(0) - "a".charCodeAt(0);

        if (costMatrix[from][to] === INF) {
            return -1; // Conversion is impossible
        }

        totalCost += costMatrix[from][to];
    }

    return totalCost;
};
