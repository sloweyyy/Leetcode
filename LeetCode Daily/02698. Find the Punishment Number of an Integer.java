
class Solution {

    public int punishmentNumber(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            int square = i * i;
            if (canPartition(String.valueOf(square), 0, i)) {
                sum += square;
            }
        }
        return sum;
    }

    private boolean canPartition(String num, int start, int target) {
        if (start == num.length()) {
            return target == 0;
        }

        int currentSum = 0;
        for (int i = start; i < num.length(); i++) {
            currentSum = currentSum * 10 + (num.charAt(i) - '0');
            if (currentSum > target) {
                break;
            }
            if (canPartition(num, i + 1, target - currentSum)) {
                return true;
            }
        }
        return false;
    }
}
