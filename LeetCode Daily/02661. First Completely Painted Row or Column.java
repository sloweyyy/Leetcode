
class Solution {

    public int firstCompleteIndex(int[] arr, int[][] mat) {
        int m = mat.length;
        int n = mat[0].length;

        // Map value to position
        Map<Integer, int[]> valueToPos = new HashMap<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                valueToPos.put(mat[i][j], new int[]{i, j});
            }
        }

        // Track painted cells
        int[] rowCount = new int[m];
        int[] colCount = new int[n];

        // Process array
        for (int i = 0; i < arr.length; i++) {
            int[] pos = valueToPos.get(arr[i]);
            rowCount[pos[0]]++;
            colCount[pos[1]]++;

            // Check if complete
            if (rowCount[pos[0]] == n || colCount[pos[1]] == m) {
                return i;
            }
        }

        return -1;
    }
}
