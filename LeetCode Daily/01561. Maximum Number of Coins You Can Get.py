class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        return sum(piles[i] for i in range(len(piles) // 3, len(piles), 2))