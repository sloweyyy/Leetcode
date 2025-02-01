class Solution {
    public List<Integer> largestDivisibleSubset(int[] nums) {
        int n = nums.length;
        if(n == 0) return new ArrayList<>();
        Arrays.sort(nums);
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        int max = 1;
        for(int i = 1; i < n; i++) {
            for(int j = 0; j < i; j++) {
                if(nums[i] % nums[j] == 0) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    max = Math.max(max, dp[i]);
                }
            }
        }
        List<Integer> res = new ArrayList<>();
        int prev = -1;
        for(int i = n - 1; i >= 0; i--) {
            if(dp[i] == max && (prev % nums[i] == 0 || prev == -1)) {
                res.add(nums[i]);
                max--;
                prev = nums[i];
            }
        }
        return res;
    }
}