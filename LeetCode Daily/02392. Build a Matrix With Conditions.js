function buildMatrix(k, rowConditions, colConditions) {
    const dfs = (src, graph, visited, curPath, res) => {
        if (curPath.has(src)) return false; // Cycle detected
        if (visited.has(src)) return true; // Already visited

        visited.add(src);
        curPath.add(src);

        const neighbors = graph.get(src) || [];
        for (const neighbor of neighbors) {
            if (!dfs(neighbor, graph, visited, curPath, res)) return false;
        }

        curPath.delete(src); // Backtrack
        res.push(src);
        return true;
    };

    const topoSort = (edges, k) => {
        const graph = new Map();
        edges.forEach(([src, dst]) => {
            if (!graph.has(src)) graph.set(src, []);
            graph.get(src).push(dst);
        });

        const visited = new Set();
        const curPath = new Set();
        const res = [];

        for (let src = 1; src <= k; ++src) {
            if (!dfs(src, graph, visited, curPath, res)) return [];
        }

        return res.reverse();
    };

    const rowSorting = topoSort(rowConditions, k);
    const colSorting = topoSort(colConditions, k);
    if (!rowSorting.length || !colSorting.length) return [];

    const valuePosition = {};
    rowSorting.forEach((val, ind) => (valuePosition[val] = [ind, 0]));
    colSorting.forEach((val, ind) => (valuePosition[val][1] = ind));

    const matrix = Array.from({ length: k }, () => Array(k).fill(0));
    for (let value = 1; value <= k; ++value) {
        const [row, column] = valuePosition[value];
        matrix[row][column] = value;
    }

    return matrix;
}
