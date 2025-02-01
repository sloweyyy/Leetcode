class Solution {
    public int pivotInteger(int n) {
        int[] arr = new int[n];
        int[] left = new int[n];
        int[] right = new int[n];
        int max = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = i;
            max = Math.max(max, arr[i]);
        }
        left[0] = arr[0];
        for (int i = 1; i < n; i++) {
            left[i] = Math.max(left[i - 1], arr[i]);
        }
        right[n - 1] = arr[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            right[i] = Math.min(right[i + 1], arr[i]);
        }
        for (int i = 0; i < n; i++) {
            if (left[i] == right[i]) {
                return left[i];
            }
        }
        return -1;
    }
}