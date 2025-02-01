function isBipartite(graph: number[][]): boolean {
    const colors: number[] = Array(graph.length).fill(0);
    for (let i = 0; i < graph.length; i++) {
        if (colors[i] === 0 && !dfs2(graph, colors, i, 1)) return false;
    }
    return true;
}

function dfs2(
    graph: number[][],
    colors: number[],
    cur: number,
    color: number,
): boolean {
    if (colors[cur] !== 0) return colors[cur] === color;
    colors[cur] = color;
    for (const next of graph[cur]) {
        if (!dfs2(graph, colors, next, -color)) return false;
    }
    return true;
}
