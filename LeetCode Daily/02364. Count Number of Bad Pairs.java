
class Solution {

    public long countBadPairs(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        long goodPairs = 0;

        // Count good pairs where nums[i] - i == nums[j] - j
        for (int i = 0; i < nums.length; i++) {
            int diff = nums[i] - i;
            goodPairs += map.getOrDefault(diff, 0);
            map.put(diff, map.getOrDefault(diff, 0) + 1);
        }

        long n = nums.length;
        long totalPairs = (n * (n - 1)) / 2;
        // Bad pairs = total possible pairs - good pairs
        return totalPairs - goodPairs;
    }
}
