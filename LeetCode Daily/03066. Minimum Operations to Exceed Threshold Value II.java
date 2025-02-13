
class Solution {

    public int minOperations(int[] nums, int k) {
        // Use PriorityQueue to keep track of minimum elements
        PriorityQueue<Long> pq = new PriorityQueue<>();

        // Add all numbers to priority queue
        for (int num : nums) {
            pq.offer((long) num);
        }

        int operations = 0;

        // Continue until all elements are >= k
        while (pq.size() >= 2 && pq.peek() < k) {
            // Get two smallest elements
            long x = pq.poll();
            long y = pq.poll();

            // Calculate new value: min(x,y) * 2 + max(x,y)
            long newValue = Math.min(x, y) * 2 + Math.max(x, y);
            pq.offer(newValue);
            operations++;
        }

        // Return -1 if impossible, otherwise return operations count
        return pq.peek() >= k ? operations : -1;
    }
}
