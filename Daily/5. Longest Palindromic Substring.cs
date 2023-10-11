public class Solution
{
    public string LongestPalindrome(string s)
    {
        var n = s.Length;
        var result = string.Empty;
        var dp = new bool[n, n];

        for (int i = n - 1; i >= 0; --i)
        {
            for (int j = i; j < n; ++j)
            {
                dp[i, j] = s[i] == s[j] && (j - i < 3 || dp[i + 1, j - 1]);

                if (dp[i, j] && (result == string.Empty || j - i + 1 > result.Length))
                {
                    result = s.Substring(i, j - i + 1);
                }
            }
        }

        return result;

    }
}