
class Solution {

    public int[] lexicographicallySmallestArray(int[] nums, int limit) {
        int n = nums.length;
        // Create pairs of (value, index)
        int[][] pairs = new int[n][2];
        for (int i = 0; i < n; i++) {
            pairs[i] = new int[]{nums[i], i};
        }

        // Sort by values
        Arrays.sort(pairs, (a, b) -> Integer.compare(a[0], b[0]));

        // Group elements that can be swapped
        List<List<Integer>> groups = new ArrayList<>();
        List<Integer> currentGroup = new ArrayList<>();
        currentGroup.add(0);

        for (int i = 1; i < n; i++) {
            if (pairs[i][0] - pairs[i - 1][0] <= limit) {
                currentGroup.add(i);
            } else {
                groups.add(new ArrayList<>(currentGroup));
                currentGroup = new ArrayList<>();
                currentGroup.add(i);
            }
        }
        groups.add(currentGroup);

        // Result array
        int[] result = new int[n];

        // Process each group
        for (List<Integer> group : groups) {
            List<Integer> positions = new ArrayList<>();
            List<Integer> values = new ArrayList<>();

            for (int idx : group) {
                positions.add(pairs[idx][1]);
                values.add(pairs[idx][0]);
            }

            Collections.sort(positions);
            Collections.sort(values);

            for (int i = 0; i < positions.size(); i++) {
                result[positions.get(i)] = values.get(i);
            }
        }

        return result;
    }
}
