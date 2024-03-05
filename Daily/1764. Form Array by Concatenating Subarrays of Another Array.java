class Solution {
    public boolean canChoose(int[][] groups, int[] nums) {
        int i = 0;
        for (int j = 0; i < groups.length && j < nums.length; j++) {
            if (nums[j] == groups[i][0]) {
                int k = j;
                for (int l = 0; l < groups[i].length; l++) {
                    if (k == nums.length || nums[k] != groups[i][l]) {
                        break;
                    }
                    k++;
                }
                if (k - j == groups[i].length) {
                    j = k - 1;
                    i++;
                }
            }
        }
        return i == groups.length;
    }
}