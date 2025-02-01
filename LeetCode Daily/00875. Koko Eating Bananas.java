class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int maxPile = 0;
        for (int pile : piles) {
            maxPile = Math.max(maxPile, pile);
        }

        int left = 1, right = maxPile;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (!canEatAll(piles, h, mid)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    private boolean canEatAll(int[] piles, int h, int k) {
        int time = 0;
        for (int pile : piles) {
            time += (pile + k - 1) / k;
        }
        return time <= h;
    }
}