
class Solution {

    public int[] queryResults(int limit, int[][] queries) {
        Map<Integer, Integer> bal = new HashMap<>();
        Map<Integer, Integer> col = new HashMap<>();
        int n = queries.length;
        int[] res = new int[n];

        for (int i = 0; i < n; i++) {
            if (!bal.containsKey(queries[i][0])) {
                bal.put(queries[i][0], queries[i][1]);
            } else {
                if (col.get(bal.get(queries[i][0])) == 1) {
                    col.remove(bal.get(queries[i][0]));
                } else {
                    col.put(bal.get(queries[i][0]), col.get(bal.get(queries[i][0])) - 1);
                }
                bal.put(queries[i][0], queries[i][1]);
            }

            col.put(queries[i][1], col.getOrDefault(queries[i][1], 0) + 1);

            res[i] = col.size();
        }

        return res;
    }
}
