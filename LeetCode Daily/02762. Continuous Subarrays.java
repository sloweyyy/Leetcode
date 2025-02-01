
class Solution {
  public long continuousSubarrays(int[] nums) {
    int n = nums.length;
    long result = 0;
    TreeMap<Integer, Integer> map = new TreeMap<>();
    int left = 0;

    for (int right = 0; right < n; right++) {
      map.put(nums[right], map.getOrDefault(nums[right], 0) + 1);

      while (map.lastKey() - map.firstKey() > 2) {
        map.put(nums[left], map.get(nums[left]) - 1);
        if (map.get(nums[left]) == 0) {
          map.remove(nums[left]);
        }
        left++;
      }

      result += right - left + 1;
    }

    return result;
  }
}