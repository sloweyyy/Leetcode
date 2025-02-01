class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int[][] memo = new int[text1.length()][text2.length()];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        return dfs(text1, text2, 0, 0, memo);       
    }

    private int dfs(String text1, String text2, int i, int j, int[][] memo) {
        if (i == text1.length() || j == text2.length()) {
            return 0;
        }
        if (memo[i][j] != -1) {
            return memo[i][j];
        }
        int res = 0;
        if (text1.charAt(i) == text2.charAt(j)) {
            res = Math.max(res, 1 + dfs(text1, text2, i + 1, j + 1, memo));
        } else {
            res = Math.max(res, dfs(text1, text2, i + 1, j, memo));
            res = Math.max(res, dfs(text1, text2, i, j + 1, memo));
        }
        memo[i][j] = res;
        return res;
    }
}