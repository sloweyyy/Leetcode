class Solution {
  public int[] finalPrices(int[] prices) {
    int n = prices.length;
    int[] res = new int[n];
    Stack<Integer> stack = new Stack<>();
    for (int i = n - 1; i >= 0; i--) {
      while (!stack.isEmpty() && prices[i] < stack.peek()) {
        stack.pop();
      }
      res[i] = prices[i] - (stack.isEmpty() ? 0 : stack.peek());
      stack.push(prices[i]);
    }
    return res;
  }
}