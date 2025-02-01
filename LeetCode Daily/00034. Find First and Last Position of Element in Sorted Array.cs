public class Solution
{
    public int[] SearchRange(int[] nums, int target)
    {
        int[] result = new int[2];
        result[0] = -1;
        result[1] = -1;
        if (nums.Length == 0)
        {
            return result;
        }
        int left = 0;
        int right = nums.Length - 1;
        while (left < right)
        {
            int mid = (left + right) / 2;
            if (nums[mid] < target)
            {
                left = mid + 1;
            }
            else
            {
                right = mid;
            }
        }
        if (nums[left] != target)
        {
            return result;
        }
        result[0] = left;
        right = nums.Length - 1;
        while (left < right)
        {
            int mid = (left + right) / 2 + 1;
            if (nums[mid] > target)
            {
                right = mid - 1;
            }
            else
            {
                left = mid;
            }
        }
        result[1] = right;
        return result;
    }
}