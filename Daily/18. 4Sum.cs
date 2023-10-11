public class Solution
{
    public IList<IList<int>> FourSum(int[] nums, int target)
    {
        Array.Sort(nums);
        var res = new Dictionary<string, IList<int>>();

        var ext1 = 0;               // external left index
        var ext2 = nums.Length - 1; // external right index
        var int1 = 1;               // internal left index
        var int2 = nums.Length - 2; // internal right index

        for (ext1 = 0; ext1 < nums.Length - 1; ext1++)
        {
            for (ext2 = nums.Length - 1; ext2 > 0; ext2--)
            {
                int1 = ext1 + 1;
                int2 = ext2 - 1;
                while (int1 < int2)
                {
                    var sum = (long)nums[ext1] + (long)nums[ext2] + (long)nums[int1] + (long)nums[int2];
                    if (sum == target)
                    {
                        var arr = new[] { nums[ext1], nums[int1], nums[int2], nums[ext2] };
                        var s = string.Join(' ', arr);
                        res.TryAdd(s, arr);
                    }

                    if (sum <= target) int1++;
                    else int2--;
                }
            }
        }

        return res.Values.ToList();
    }
}