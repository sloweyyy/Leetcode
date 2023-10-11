public class Solution {
    public int MaxArea(int[] height) {
        var n = height.Length;
        var result = 0;
        var left = 0;
        var right = n - 1;
        
        while (left < right)
        {
            result = Math.Max(result, Math.Min(height[left], height[right]) * (right - left));
            
            if (height[left] < height[right])
            {
                left++;
            }
            else
            {
                right--;
            }
        }
        
        return result;
    }
}