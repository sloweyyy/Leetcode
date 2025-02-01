
class Solution {

    public long gridGame(int[][] grid) {
        int n = grid[0].length;
        long[] topPrefixSum = new long[n];
        long[] bottomPrefixSum = new long[n];

        // Calculate prefix sums
        topPrefixSum[0] = grid[0][0];
        bottomPrefixSum[0] = grid[1][0];
        for (int i = 1; i < n; i++) {
            topPrefixSum[i] = topPrefixSum[i - 1] + grid[0][i];
            bottomPrefixSum[i] = bottomPrefixSum[i - 1] + grid[1][i];
        }

        long minSecondRobotPoints = Long.MAX_VALUE;

        // Try each possible position where first robot moves down
        for (int i = 0; i < n; i++) {
            long remainingTopPoints = topPrefixSum[n - 1] - topPrefixSum[i];
            long remainingBottomPoints = i > 0 ? bottomPrefixSum[i - 1] : 0;

            // Second robot will take maximum of remaining paths
            long secondRobotPoints = Math.max(remainingTopPoints, remainingBottomPoints);
            minSecondRobotPoints = Math.min(minSecondRobotPoints, secondRobotPoints);
        }

        return minSecondRobotPoints;
    }
}
