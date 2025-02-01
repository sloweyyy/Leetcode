
import java.util.*;

class Solution {

    public int maxKDivisibleComponents(int n, int[][] edges, int[] values, int k) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }
        int[] count = new int[1];
        dfs(0, -1, adj, values, k, count);
        return count[0];
    }

    private int dfs(int node, int parent, List<List<Integer>> adj, int[] values, int k, int[] count) {
        int total = values[node] % k;
        for (int neighbor : adj.get(node)) {
            if (neighbor != parent) {
                total += dfs(neighbor, node, adj, values, k, count);
                total %= k;
            }
        }
        if (total == 0) {
            count[0]++;
            return 0;
        }
        return total;
    }
}
