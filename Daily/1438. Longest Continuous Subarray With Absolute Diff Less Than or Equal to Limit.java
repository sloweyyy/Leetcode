class Solution {
    public int longestSubarray(int[] nums, int limit) {
        int n = nums.length;
        Deque<Integer> maxDeque = new LinkedList<>();
        Deque<Integer> minDeque = new LinkedList<>();
        int left = 0, right = 0, ans = 0;
        while (right < n) {
            while (!maxDeque.isEmpty() && nums[right] > nums[maxDeque.peekLast()]) {
                maxDeque.pollLast();
            }
            while (!minDeque.isEmpty() && nums[right] < nums[minDeque.peekLast()]) {
                minDeque.pollLast();
            }
            maxDeque.offerLast(right);
            minDeque.offerLast(right);
            while (nums[maxDeque.peekFirst()] - nums[minDeque.peekFirst()] > limit) {
                if (maxDeque.peekFirst() == left) {
                    maxDeque.pollFirst();
                }
                if (minDeque.peekFirst() == left) {
                    minDeque.pollFirst();
                }
                left++;
            }
            ans = Math.max(ans, right - left + 1);
            right++;
        }
        return ans;
    }
}