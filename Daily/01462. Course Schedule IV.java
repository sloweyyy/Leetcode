
class Solution {

    public List<Boolean> checkIfPrerequisite(int numCourses, int[][] prerequisites, int[][] queries) {
        List<Boolean> res = new ArrayList<>();
        boolean[][] graph = new boolean[numCourses][numCourses];
        boolean[][] dp = new boolean[numCourses][numCourses];

        // Build graph
        for (int[] pre : prerequisites) {
            graph[pre[0]][pre[1]] = true;
        }

        // Floyd-Warshall
        for (int k = 0; k < numCourses; k++) {
            for (int i = 0; i < numCourses; i++) {
                for (int j = 0; j < numCourses; j++) {
                    if (graph[i][k] && graph[k][j]) {
                        graph[i][j] = true;
                    }
                }
            }
        }

        // Check queries
        for (int[] query : queries) {
            res.add(graph[query[0]][query[1]]);
        }

        return res;
    }
}
