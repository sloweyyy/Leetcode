
class Solution {

    public int countServers(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int[] row = new int[m];
        int[] col = new int[n];
        int total = 0;
        for (int i = 0; i < m; i++) {
            int count = 0;
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    count++;
                }
            }
            row[i] = count;
            total += count;
        }
        for (int j = 0; j < n; j++) {
            int count = 0;
            for (int i = 0; i < m; i++) {
                if (grid[i][j] == 1) {
                    count++;
                }
            }
            col[j] = count;
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1 && row[i] == 1 && col[j] == 1) {
                    total--;
                }
            }
        }
        return total;
    }
}
