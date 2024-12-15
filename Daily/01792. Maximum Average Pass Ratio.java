import java.util.PriorityQueue;

class Solution {
  public double maxAverageRatio(int[][] classes, int extraStudents) {
    PriorityQueue<double[]> pq = new PriorityQueue<>((a, b) -> Double.compare(b[0], a[0]));
    double result = 0;

    for (int[] c : classes) {
      pq.offer(new double[] { profit(c[0], c[1]), c[0], c[1] });
    }

    while (extraStudents-- > 0) {
      double[] c = pq.poll();
      c[1]++;
      c[2]++;
      pq.offer(new double[] { profit((int)c[1], (int)c[2]), c[1], c[2] });
    }

    while (!pq.isEmpty()) {
      double[] c = pq.poll();
      result += c[1] / c[2];
    }

    return result / classes.length;     
  }

  private double profit(int pass, int total) {  
    return ((double)(pass + 1) / (total + 1)) - ((double)pass / total);
  }
}
