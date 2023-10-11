class Solution {
  List<List<int>> permute(List<int> nums) {
    List<List<int>> result = [];
    List<int> current = [];
    dfs(nums, current, result);
    return result;
  }

  void dfs(List<int> nums, List<int> current, List<List<int>> result) {
    if (current.length == nums.length) {
      result.add(current.toList());
      return;
    }
    for (int i = 0; i < nums.length; i++) {
      if (current.contains(nums[i])) continue;
      current.add(nums[i]);
      dfs(nums, current, result);
      current.removeLast();
    }
  }
}
