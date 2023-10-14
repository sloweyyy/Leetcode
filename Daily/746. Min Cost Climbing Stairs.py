from typing import List


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        dp0, dp1 = cost[0], cost[1]
        for i in range(2, n):
            dp0, dp1 = dp1, min(dp0, dp1)+cost[i]
        return min(dp0, dp1)
