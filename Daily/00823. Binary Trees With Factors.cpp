class Solution
{
public:
    int numFactoredBinaryTrees(vector<int> &arr)
    {
        int n = arr.size();
        sort(arr.begin(), arr.end());
        unordered_map<int, long> dp;
        long ans = 0;
        for (int i = 0; i < n; i++)
        {
            dp[arr[i]] = 1;
            for (int j = 0; j < i; j++)
            {
                if (arr[i] % arr[j] == 0)
                {
                    dp[arr[i]] = (dp[arr[i]] + dp[arr[j]] * dp[arr[i] / arr[j]]) % 1000000007;
                }
            }
            ans = (ans + dp[arr[i]]) % 1000000007;
        }
        return ans;
    }
};