class Solution {
  public long findScore(int[] nums) {
    int n = nums.length;
    boolean[] marked = new boolean[n];
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    for (int i = 0; i < n; i++) {
      pq.offer(new int[]{nums[i], i});
    }
    
    long score = 0;
    
    while (!pq.isEmpty()) {
      int[] current = pq.poll();
      int value = current[0];
      int index = current[1];
      
      if (marked[index]) continue;
      
      score += value;
      marked[index] = true;
      if (index - 1 >= 0) marked[index - 1] = true;
      if (index + 1 < n) marked[index + 1] = true;
    }
    
    return score;
  }
}