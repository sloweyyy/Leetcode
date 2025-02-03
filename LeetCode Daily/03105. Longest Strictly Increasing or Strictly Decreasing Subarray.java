
class Solution {

    public int longestMonotonicSubarray(int[] nums) {
        int n = nums.length;
        int[] inc = new int[n];
        int[] dec = new int[n];
        inc[0] = 1;
        dec[0] = 1;
        int max = 1;
        for (int i = 1; i < n; i++) {
            if (nums[i] > nums[i - 1]) {
                inc[i] = inc[i - 1] + 1;
                dec[i] = 1;
            } else if (nums[i] < nums[i - 1]) {
                dec[i] = dec[i - 1] + 1;
                inc[i] = 1;
            } else {
                inc[i] = 1;
                dec[i] = 1;
            }
            max = Math.max(max, Math.max(inc[i], dec[i]));
        }
        return max;
    }
}
