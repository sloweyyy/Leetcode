class Solution
{
public:
    int minFallingPathSum(vector<vector<int>> &matrix)
    {
        int n = matrix.size();
        vector<vector<int>> dp(n, vector<int>(n, 9999));
        for (int i = 0; i < n; i++)
            dp[0][i] = matrix[0][i];

        for (int i = 1; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                dp[i][j] = dp[i - 1][j];
                if (j > 0)
                    dp[i][j] = min(dp[i][j], dp[i - 1][j - 1]);
                if (j < n - 1)
                    dp[i][j] = min(dp[i][j], dp[i - 1][j + 1]);
                dp[i][j] += matrix[i][j];
            }
        }
        return *min_element(dp[n - 1].begin(), dp[n - 1].end());
    }
};