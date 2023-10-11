public class Solution
{
    public int ThreeSumClosest(int[] nums, int target)
    {
        Array.Sort(nums);
        var result = nums[0] + nums[1] + nums[2];
        for (var i = 0; i < nums.Length - 2; i++)
        {
            var j = i + 1;
            var k = nums.Length - 1;
            while (j < k)
            {
                var sum = nums[i] + nums[j] + nums[k];
                if (sum == target)
                {
                    return sum;
                }
                if (Math.Abs(sum - target) < Math.Abs(result - target))
                {
                    result = sum;
                }
                if (sum < target)
                {
                    j++;
                }
                else
                {
                    k--;
                }
            }
        }
        return result;
    }
}