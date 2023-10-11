class Solution {
  int jump(List<int> nums) {
    int jumps = 0;
    int currentJumpEnd = 0;
    int farthest = 0;
    for (int i = 0; i < nums.length - 1; i++) {
      farthest = max(farthest, i + nums[i]);
      if (i == currentJumpEnd) {
        jumps++;
        currentJumpEnd = farthest;
      }
    }
    return jumps;
  }
}
