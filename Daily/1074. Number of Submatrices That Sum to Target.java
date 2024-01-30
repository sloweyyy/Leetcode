class Solution {
    public:
        int numSubmatrixSumTarget(vector<vector<int>>& matrix, int  target) {
            int m = matrix.size(), n = matrix[0].size(), res = 0;
            for (int i = 0; i < m; ++i) { 
                vector<int> sum(n);
                for (int j = i; j < m; ++j) { 
                    for (int c = 0; c < n; ++c) {
                        sum[c] += matrix[j][c]; 
                    }
                    res += subarraySum(sum, target);
                }
            }
            return res;    
        }

        int subarraySum(vector<int>& nums, int k) {
            int res = 0, sum = 0;
            unordered_map<int, int> m{{0, 1}};
            for (int i = 0; i < nums.size(); ++i) {
                sum += nums[i];
                res += m[sum - k];
                ++m[sum];
            }
            return res;
        }

        
    }
;