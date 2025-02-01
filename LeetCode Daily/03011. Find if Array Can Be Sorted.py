class Solution:
    def canSortArray(self, nums: List[int]) -> bool:
        def count_set_bits(x):
            return bin(x).count('1')
        
        segments = []
        current_segment = []
        current_bits = count_set_bits(nums[0])
        
        for num in nums:
            bits = count_set_bits(num)
            if bits == current_bits:
              current_segment.append(num)
            else:
              segments.append(current_segment)
              current_segment = [num]
              current_bits = bits
        
        segments.append(current_segment)
        
        for i in range(1, len(segments)):
            if max(segments[i-1]) > min(segments[i]):
              return False
        
        return True