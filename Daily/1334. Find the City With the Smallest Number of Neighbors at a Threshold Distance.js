/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
    const graph = Array.from({ length: n }, () => Array(n).fill(Infinity));
    for (let i = 0; i < n; i++) {
        graph[i][i] = 0;
    }

    for (const [from, to, weight] of edges) {
        graph[from][to] = weight;
        graph[to][from] = weight;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }

    let minCity = 0;
    let minCount = n;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (graph[i][j] <= distanceThreshold) {
                count++;
            }
        }

        if (count <= minCount) {
            minCity = i;
            minCount = count;
        }
    }

    return minCity;
};
