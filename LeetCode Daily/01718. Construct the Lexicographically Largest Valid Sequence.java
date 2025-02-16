
class Solution {

    public int[] constructDistancedSequence(int n) {
        int[] ans = new int[2 * n - 1];
        boolean[] visited = new boolean[n + 1];
        dfs(ans, visited, 0);
        return ans;
    }

    private boolean dfs(int[] ans, boolean[] visited, int index) {
        if (index == ans.length) {
            return true;
        }
        if (ans[index] != 0) {
            return dfs(ans, visited, index + 1);
        }
        for (int i = visited.length - 1; i >= 1; i--) {
            if (visited[i]) {
                continue;
            }
            if (i == 1) {
                ans[index] = 1;
                visited[1] = true;
                if (dfs(ans, visited, index + 1)) {
                    return true;
                }
                visited[1] = false;
                ans[index] = 0;
            } else if (index + i < ans.length && ans[index + i] == 0) {
                ans[index] = i;
                ans[index + i] = i;
                visited[i] = true;
                if (dfs(ans, visited, index + 1)) {
                    return true;
                }
                visited[i] = false;
                ans[index] = 0;
                ans[index + i] = 0;
            }
        }
        return false;
    }
}
