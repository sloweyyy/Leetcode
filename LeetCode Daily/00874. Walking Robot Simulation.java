class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        int[][] directions = new int[][] { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } };
        Set<String> obstacleSet = new HashSet<>();
        for (int[] obstacle : obstacles) {
            obstacleSet.add(obstacle[0] + " " + obstacle[1]);
        }
        int x = 0, y = 0, direction = 0, result = 0;
        for (int command : commands) {
            if (command == -2) {
                direction = (direction + 3) % 4;
            } else if (command == -1) {
                direction = (direction + 1) % 4;
            } else {
                int[] currentDirection = directions[direction];
                for (int i = 0; i < command; i++) {
                    int nextX = x + currentDirection[0];
                    int nextY = y + currentDirection[1];
                    if (obstacleSet.contains(nextX + " " + nextY)) {
                        break;
                    }
                    x = nextX;
                    y = nextY;
                    result = Math.max(result, x * x + y * y);
                }
            }
        }
        return result;
    }
}