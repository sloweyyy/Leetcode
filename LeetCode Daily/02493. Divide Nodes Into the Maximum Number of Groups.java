
class Solution {

    public int magnificentSets(int n, int[][] edges) {
        // Build adjacency list
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adj.get(edge[0] - 1).add(edge[1] - 1);
            adj.get(edge[1] - 1).add(edge[0] - 1);
        }

        // Find components using Union-Find
        UnionFind uf = new UnionFind(n);
        for (int[] edge : edges) {
            uf.union(edge[0] - 1, edge[1] - 1);
        }

        // Group nodes by component
        Map<Integer, List<Integer>> components = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int root = uf.find(i);
            components.computeIfAbsent(root, k -> new ArrayList<>()).add(i);
        }

        int totalGroups = 0;
        // Process each component
        for (List<Integer> component : components.values()) {
            int maxGroups = -1;
            // Try each node as starting point
            for (int start : component) {
                int groups = bfs(adj, start, n);
                if (groups == -1) {
                    return -1;
                }
                maxGroups = Math.max(maxGroups, groups);
            }
            totalGroups += maxGroups;
        }

        return totalGroups;
    }

    private int bfs(List<List<Integer>> adj, int start, int n) {
        Queue<Integer> queue = new LinkedList<>();
        int[] distance = new int[n];
        Arrays.fill(distance, -1);

        queue.offer(start);
        distance[start] = 0;
        int maxDist = 0;

        while (!queue.isEmpty()) {
            int curr = queue.poll();
            for (int next : adj.get(curr)) {
                if (distance[next] == -1) {
                    distance[next] = distance[curr] + 1;
                    maxDist = Math.max(maxDist, distance[next]);
                    queue.offer(next);
                } else if (distance[next] % 2 != (distance[curr] + 1) % 2) {
                    return -1; // Not bipartite
                }
            }
        }

        return maxDist + 1;
    }

    class UnionFind {

        int[] parent;

        UnionFind(int n) {
            parent = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }

        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        void union(int x, int y) {
            parent[find(x)] = find(y);
        }
    }
}
