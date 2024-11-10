class Solution {
    public int maxSatisfied(int[] customers, int[] grumpy, int minutes) {
        int n = customers.length;
        int satisfied = 0;
        for (int i = 0; i < n; i++) {
            if (grumpy[i] == 0) {
                satisfied += customers[i];
            }
        }
        int left = 0, right = 0, max = 0, sum = 0;
        while (right < n) {
            if (grumpy[right] == 1) {
                sum += customers[right];
            }
            right++;
            while (right - left > minutes) {
                if (grumpy[left] == 1) {
                    sum -= customers[left];
                }
                left++;
            }
            max = Math.max(max, sum);
        }
        return satisfied + max;
    }
}