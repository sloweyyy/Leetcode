from typing import List

class Solution:
  def maxWidthRamp(self, nums: List[int]) -> int:
    n = len(nums)
    stack = []
    
    for i in range(n):
      if not stack or nums[stack[-1]] > nums[i]:
        stack.append(i)
    
    maxWidth = 0
    
    for j in range(n - 1, -1, -1):
      while stack and nums[stack[-1]] <= nums[j]:
        maxWidth = max(maxWidth, j - stack.pop())
    
    return maxWidth