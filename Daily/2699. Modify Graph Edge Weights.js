var modifiedGraphEdges = function (n, edges, source, destination, target) {
    const INF = 2 * 10 ** 9;

    // Helper function to run Dijkstra's algorithm
    const dijkstra = (n, graph, source) => {
        const dist = Array(n).fill(Infinity);
        dist[source] = 0;
        const minHeap = new MinHeap();
        minHeap.push([source, 0]);

        while (!minHeap.isEmpty()) {
            const [u, d] = minHeap.pop();
            if (d > dist[u]) continue;

            for (const [v, weight] of graph[u]) {
                const newDist = d + weight;
                if (newDist < dist[v]) {
                    dist[v] = newDist;
                    minHeap.push([v, newDist]);
                }
            }
        }

        return dist;
    };

    // Step 1: Build the graph with the given edges (ignoring -1 weights for now)
    let graph = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        if (w !== -1) {
            graph[u].push([v, w]);
            graph[v].push([u, w]);
        }
    }

    // Step 2: Run Dijkstra's algorithm to get the shortest path from source to all nodes
    const distFromSource = dijkstra(n, graph, source);

    // If the shortest path from source to destination is already greater than or equal to the target, return []
    if (distFromSource[destination] > target) return [];

    // Step 3: Temporarily set all -1 weights to 1 and check the shortest path
    for (const edge of edges) {
        if (edge[2] === -1) edge[2] = 1;
    }

    // Rebuild the graph with the modified weights
    graph = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    const distWithOnes = dijkstra(n, graph, source);

    // If the shortest path with all -1 edges set to 1 is still greater than the target, return []
    if (distWithOnes[destination] > target) return [];

    // Step 4: Modify the edges to meet the target
    for (const edge of edges) {
        if (edge[2] === 1) edge[2] = INF;
    }

    // Rebuild the graph again with INF weights
    graph = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    const finalDist = dijkstra(n, graph, source);

    if (finalDist[destination] === target) return edges;

    // Adjust specific edges to meet the target distance
    for (const edge of edges) {
        if (edge[2] === INF) {
            const distToU = distFromSource[edge[0]];
            const distToV = distFromSource[edge[1]];
            if (distToU + distToV + 1 <= target) {
                edge[2] = target - distToU - distToV;
                return edges;
            }
        }
    }

    return [];
};

// MinHeap Implementation for Dijkstra's Algorithm
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (parent >= 0 && this.heap[index][1] < this.heap[parent][1]) {
            [this.heap[index], this.heap[parent]] = [
                this.heap[parent],
                this.heap[index],
            ];
            this.bubbleUp(parent);
        }
    }

    bubbleDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (
            left < this.heap.length &&
            this.heap[left][1] < this.heap[smallest][1]
        ) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right][1] < this.heap[smallest][1]
        ) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[index],
            ];
            this.bubbleDown(smallest);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
