
class Solution {

    public int largestIsland(int[][] grid) {
        int n = grid.length;
        int[] size = new int[n * n];
        Arrays.fill(size, 1);
        int[] parent = new int[n * n];
        for (int i = 0; i < n * n; i++) {
            parent[i] = i;
        }

        // Handle single cell case
        if (n == 1) {
            return grid[0][0] == 1 ? 1 : 1;
        }

        int[][] dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int maxArea = 0;
        // Union-Find
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (grid[r][c] == 1) {
                    for (int[] dir : dirs) {
                        int nr = r + dir[0];
                        int nc = c + dir[1];
                        if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                            int p1 = r * n + c;
                            int p2 = nr * n + nc;
                            int root1 = find(parent, p1);
                            int root2 = find(parent, p2);
                            if (root1 != root2) {
                                parent[root1] = root2;
                                size[root2] += size[root1];
                                maxArea = Math.max(maxArea, size[root2]);
                            }
                        }
                    }
                }
            }
        }

        // DFS
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (grid[r][c] == 0) {
                    Set<Integer> set = new HashSet<>();
                    for (int[] dir : dirs) {
                        int nr = r + dir[0];
                        int nc = c + dir[1];
                        if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                            int root = find(parent, nr * n + nc);
                            set.add(root);
                        }
                    }
                    int area = 1;
                    for (int root : set) {
                        area += size[root];
                    }
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }

    private int find(int[] parent, int x) {
        if (parent[x] != x) {
            parent[x] = find(parent, parent[x]);
        }
        return parent[x];
    }
}
