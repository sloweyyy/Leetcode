/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {};
var shortestDistanceAfterQueries = function (n, queries) {
    const results = [];
    const graph = Array.from({ length: n }, () => []);

    // Initialize the graph with the initial roads
    for (let i = 0; i < n - 1; i++) {
        graph[i].push(i + 1);
    }

    const bfs = (start, end) => {
        const queue = [[start, 0]];
        const visited = new Array(n).fill(false);
        visited[start] = true;

        while (queue.length > 0) {
            const [node, dist] = queue.shift();
            if (node === end) return dist;

            for (const neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push([neighbor, dist + 1]);
                }
            }
        }
        return -1;
    };

    for (const [u, v] of queries) {
        graph[u].push(v);
        results.push(bfs(0, n - 1));
    }

    return results;
};
