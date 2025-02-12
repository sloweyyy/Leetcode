
class Solution {

    public int maximumSum(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int ans = -1;

        for (int i = 0; i < nums.length; i++) {
            int digitSum = getDigitSum(nums[i]);
            if (map.containsKey(digitSum)) {
                ans = Math.max(ans, nums[i] + nums[map.get(digitSum)]);
            }
            if (!map.containsKey(digitSum) || nums[i] > nums[map.get(digitSum)]) {
                map.put(digitSum, i);
            }
        }
        return ans;
    }

    private int getDigitSum(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }
}
