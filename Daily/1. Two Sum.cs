public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        var dict = new Dictionary<int, int>();
        for (var i = 0; i < nums.Length; i++)
        {
            var num = nums[i];
            var diff = target - num;
            if (dict.ContainsKey(diff))
            {
                return new int[] { dict[diff], i };
            }
            dict[num] = i;
        }
        return new int[] { };
    }
}