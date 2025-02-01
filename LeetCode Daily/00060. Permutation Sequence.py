class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        nums = [i for i in range(1,n+1)]
        fact = [1 for _ in range(n)]
        for i in range(1,n):
            fact[i] = fact[i-1]*i
        k -= 1
        res = []
        for i in range(n-1,-1,-1):
            idx = k//fact[i]
            k = k%fact[i]
            res.append(nums[idx])
            nums.pop(idx)
        return ''.join([str(i) for i in res])