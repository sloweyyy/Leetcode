
class Solution {

    public int maximumInvitations(int[] favorite) {
        int n = favorite.length;
        int[] degree = new int[n];
        int[] dp = new int[n];
        Arrays.fill(dp, 1);

        // Calculate in-degrees and chain lengths
        for (int fav : favorite) {
            degree[fav]++;
        }

        // Process chains starting from leaves
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (degree[i] == 0) {
                q.offer(i);
            }
        }

        while (!q.isEmpty()) {
            int curr = q.poll();
            int next = favorite[curr];
            dp[next] = Math.max(dp[next], dp[curr] + 1);
            degree[next]--;
            if (degree[next] == 0) {
                q.offer(next);
            }
        }

        // Find cycles
        boolean[] visited = new boolean[n];
        int maxCycle = 0;
        int pairSum = 0;

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                List<Integer> cycle = new ArrayList<>();
                int curr = i;
                while (!visited[curr]) {
                    visited[curr] = true;
                    cycle.add(curr);
                    curr = favorite[curr];
                }

                // Find cycle start
                int cycleStart = curr;
                int cycleLen = 0;
                for (int j = cycle.size() - 1; j >= 0; j--) {
                    if (cycle.get(j) == cycleStart) {
                        cycleLen = cycle.size() - j;
                        break;
                    }
                }

                if (cycleLen > 2) {
                    maxCycle = Math.max(maxCycle, cycleLen);
                } else if (cycleLen == 2) {
                    pairSum += dp[cycle.get(cycle.size() - 1)] + dp[cycle.get(cycle.size() - 2)];
                }
            }
        }

        return Math.max(maxCycle, pairSum);
    }
}
