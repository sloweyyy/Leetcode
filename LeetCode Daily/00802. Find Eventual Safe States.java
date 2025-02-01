
class Solution {

    public List<Integer> eventualSafeNodes(int[][] graph) {
        int n = graph.length;
        List<Integer> result = new ArrayList<>();
        int[] color = new int[n];

        for (int i = 0; i < n; i++) {
            if (dfs(graph, color, i)) {
                result.add(i);
            }
        }

        return result;
    }

    private boolean dfs(int[][] graph, int[] color, int node) {
        if (color[node] > 0) {
            return color[node] == 2;
        }

        color[node] = 1;
        for (int next : graph[node]) {
            if (color[next] == 2) {
                continue;
            }
            if (color[next] == 1 || !dfs(graph, color, next)) {
                return false;
            }
        }

        color[node] = 2;
        return true;
    }
}
