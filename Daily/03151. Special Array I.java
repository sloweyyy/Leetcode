
class Solution {

    public boolean isArraySpecial(int[] nums) {
        int n = nums.length;
        int[] count = new int[n + 1];
        for (int num : nums) {
            count[Math.min(num, n)]++;
        }

        int sum = 0;
        for (int i = n; i >= 1; i--) {
            sum += count[i];
            if (sum == i) {
                return true;
            }
        }

        return false;
    }
}
