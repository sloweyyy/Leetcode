public class Solution
{
    public int LengthOfLongestSubstring(string s)
    {
        var n = s.Length;
        var result = 0;
        var left = 0;
        var right = 0;
        var set = new HashSet<char>();

        while (right < n)
        {
            while (right < n && !set.Contains(s[right]))
            {
                set.Add(s[right]);
                right++;
            }

            result = Math.Max(result, right - left);

            while (right < n && set.Contains(s[right]))
            {
                set.Remove(s[left]);
                left++;
            }
        }

        return result;
    }
}