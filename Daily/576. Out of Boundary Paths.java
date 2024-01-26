class Solution {
    public int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        int[][][] memo = new int[m][n][maxMove + 1];
        for (int[][] row : memo) {
            for (int[] col : row) {
                Arrays.fill(col, -1);
            }
        }
        return dfs(m, n, maxMove, startRow, startColumn, memo);
    }

    private int dfs(int m, int n, int maxMove, int row, int col, int[][][] memo) {
        if (row < 0 || row >= m || col < 0 || col >= n) {
            return 1;
        }
        if (maxMove == 0) {
            return 0;
        }
        if (memo[row][col][maxMove] != -1) {
            return memo[row][col][maxMove];
        }
        int res = 0;
        res = (res + dfs(m, n, maxMove - 1, row - 1, col, memo)) % 1000000007;
        res = (res + dfs(m, n, maxMove - 1, row + 1, col, memo)) % 1000000007;
        res = (res + dfs(m, n, maxMove - 1, row, col - 1, memo)) % 1000000007;
        res = (res + dfs(m, n, maxMove - 1, row, col + 1, memo)) % 1000000007;
        memo[row][col][maxMove] = res;
        return res;
    }
}