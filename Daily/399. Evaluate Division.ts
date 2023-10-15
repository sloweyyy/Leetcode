function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: Map<string, Map<string, number>> = new Map();
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];
        if (!graph.has(a)) graph.set(a, new Map());
        if (!graph.has(b)) graph.set(b, new Map());
        if (graph.has(a) && graph.has(b)) {
            graph.get(a)!.set(b, val);
            graph.get(b)!.set(a, 1 / val);
        }
    }

    const res: number[] = [];
    for (const [a, b] of queries) {
        if (!graph.has(a) || !graph.has(b)) {
            res.push(-1);
            continue;
        }
        const visited: Set<string> = new Set();
        res.push(dfs1(graph, a, b, visited));
    }
    return res;
};

function dfs1(graph: Map<string, Map<string, number>>, cur: string, target: string, visited: Set<string>): number {
    if (cur === target) return 1;
    visited.add(cur);
    const neighbors = graph.get(cur);
    if (!neighbors) return -1; // add null check
    for (const [next, val] of neighbors.entries()) {
        if (visited.has(next)) continue;
        const res = dfs1(graph, next, target, visited);
        if (res !== -1) return res * val;
    }
    return -1;
}

