class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        return atMost(nums, k) - atMost(nums, k - 1);
    }

    private int atMost(int[] nums, int k) {
        int n = nums.length;
        int left = 0, right = 0, count = 0, ans = 0;
        while (right < n) {
            if (nums[right] % 2 == 1) {
                count++;
            }
            right++;
            while (count > k) {
                if (nums[left] % 2 == 1) {
                    count--;
                }
                left++;
            }
            ans += right - left;
        }
        return ans;
    }
}