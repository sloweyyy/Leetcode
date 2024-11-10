class Solution
{
public:
    int minOperations(string s)
    {
        int n = s.size();
        int ans = 0;
        for (int i = 0; i < n; i++)
        {
            if (s[i] - '0' != i % 2)
            {
                ans++;
            }
        }
        return min(ans, n - ans);
    }
};