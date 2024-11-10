public class Solution {
    public int MinOperations(int[] nums) {
        HashSet<int> set = new HashSet<int>();
        foreach (int num in nums)
        {
            set.Add(num);
        }
        int[] arr = new int[set.Count];
        set.CopyTo(arr);
        Array.Sort(arr);
        int result = nums.Length;
        int left = 0;
        int right = 0;
        while (right < arr.Length)
        {
            while (right < arr.Length && arr[right] - arr[left] < nums.Length)
            {
                right++;
            }
            result = Math.Min(result, nums.Length - (right - left));
            left++;
        }
        return result;
    }
}