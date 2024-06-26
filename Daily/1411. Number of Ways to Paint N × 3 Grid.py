class Solution:
    def numOfWays(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        prev_0, prev_1 = 6, 6
        for _ in range(1, n):
            curr_0 = prev_0 * 3 + prev_1 * 2
            curr_1 = prev_0 * 2 + prev_1 * 2
            prev_0, prev_1 = curr_0, curr_1
        return (prev_0 + prev_1) % MOD

# source: https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/discuss/575486/Python-O(logN)-time-O(1)-space-with-explanation