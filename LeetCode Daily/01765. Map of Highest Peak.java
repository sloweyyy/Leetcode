
class Solution {

    public int[][] highestPeak(int[][] isWater) {
        int rows = isWater.length;
        int cols = isWater[0].length;
        int[][] heights = new int[rows][cols];
        Queue<int[]> queue = new LinkedList<>();

        // Initialize heights and queue with water cells
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (isWater[i][j] == 1) {
                    heights[i][j] = 0;
                    queue.offer(new int[]{i, j});
                } else {
                    heights[i][j] = -1; // Mark unvisited land cells
                }
            }
        }

        // Direction arrays for adjacent cells (up, right, down, left)
        int[][] directions = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

        // BFS to assign heights
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int row = current[0];
            int col = current[1];

            // Check all adjacent cells
            for (int[] dir : directions) {
                int nextRow = row + dir[0];
                int nextCol = col + dir[1];

                // Skip if out of bounds or already visited
                if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols
                        || heights[nextRow][nextCol] != -1) {
                    continue;
                }

                // Assign height one more than current cell
                heights[nextRow][nextCol] = heights[row][col] + 1;
                queue.offer(new int[]{nextRow, nextCol});
            }
        }

        return heights;
    }
}
