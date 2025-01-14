public class Solution
{
  public int[] FindThePrefixCommonArray(int[] A, int[] B)
  {
    int n = A.Length;
    int[] C = new int[n];
    int[] freq = new int[n + 1];
    int count = 0;
    for (int i = 0; i < n; i++)
    {
      freq[A[i]] |= 1;
      if (freq[A[i]] == 3) count++;
      freq[B[i]] |= 2;
      if (freq[B[i]] == 3) count++;
      C[i] = count;
    }
    return C;
  }
}
