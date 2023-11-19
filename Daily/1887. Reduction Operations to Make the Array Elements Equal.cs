public class Solution
{
    public int ReductionOperations(int[] nums)
    {
        var map = new Dictionary<int, int>();
        foreach (var num in nums)
        {
            if (!map.ContainsKey(num))
            {
                map.Add(num, 0);
            }

            map[num]++;
        }

        var keys = map.Keys.ToList();
        keys.Sort();
        var result = 0;
        var count = 0;
        for (var i = keys.Count - 1; i > 0; i--)
        {
            count += map[keys[i]];
            result += count;
        }

        return result;
    }
}