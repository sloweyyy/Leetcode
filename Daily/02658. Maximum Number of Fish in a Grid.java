
class Solution {

    private int dfs(int[][] grid, boolean[][] visited, int row, int col) {
        int m = grid.length;
        int n = grid[0].length;

        if (row < 0 || row >= m || col < 0 || col >= n
                || visited[row][col] || grid[row][col] == 0) {
            return 0;
        }

        visited[row][col] = true;
        int sum = grid[row][col];

        // Check all 4 directions
        int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        for (int[] dir : dirs) {
            sum += dfs(grid, visited, row + dir[0], col + dir[1]);
        }

        return sum;
    }

    public int findMaxFish(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int maxFish = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] > 0) {
                    boolean[][] visited = new boolean[m][n];
                    maxFish = Math.max(maxFish, dfs(grid, visited, i, j));
                }
            }
        }

        return maxFish;
    }
}
