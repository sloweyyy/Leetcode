from collections import deque

class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        dp = [0] * n
        q = deque()
        ans = float('-inf')
        for i in range(n):
            if q and i - q[0] > k:
                q.popleft()
            dp[i] = max(nums[i], nums[i] + (dp[q[0]] if q else 0))
            while q and dp[i] >= dp[q[-1]]:
                q.pop()
            q.append(i)
            ans = max(ans, dp[i])
        return ans
        