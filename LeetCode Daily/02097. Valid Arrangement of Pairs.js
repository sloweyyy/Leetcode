/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {
    const graph = new Map();
    const inDegree = new Map();
    const outDegree = new Map();
    const result = [];

    // Build the graph
    for (const [u, v] of pairs) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u).push(v);
        outDegree.set(u, (outDegree.get(u) || 0) + 1);
        inDegree.set(v, (inDegree.get(v) || 0) + 1);
    }

    // Find the start node
    let start = pairs[0][0];
    for (const [u, v] of pairs) {
        if ((outDegree.get(u) || 0) - (inDegree.get(u) || 0) === 1) {
            start = u;
            break;
        }
    }

    // Hierholzer's algorithm to find Eulerian path
    const stack = [start];
    while (stack.length) {
        const u = stack[stack.length - 1];
        if (graph.has(u) && graph.get(u).length) {
            stack.push(graph.get(u).pop());
        } else {
            result.push(stack.pop());
        }
    }

    return result
        .reverse()
        .map((_, i, arr) => [arr[i], arr[i + 1]])
        .slice(0, -1);
};
