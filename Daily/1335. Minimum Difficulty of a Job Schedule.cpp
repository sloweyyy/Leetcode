class Solution {
public:
    int minDifficulty(vector<int>& jobDifficulty, int d) {
        int n = jobDifficulty.size();
        if(n < d) return -1;
        vector<vector<int>> dp(n + 1, vector<int>(d + 1, 1e9));
        dp[0][0] = 0;
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= min(i, d); j++) {
                int mx = 0;
                for(int k = i; k >= j; k--) {
                    mx = max(mx, jobDifficulty[k - 1]);
                    dp[i][j] = min(dp[i][j], dp[k - 1][j - 1] + mx);
                }
            }
        }
        return dp[n][d];      
    }
};