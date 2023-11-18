class Solution
{
public:
    int maxFrequency(vector<int> &nums, int k)
    {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        int ans = 1;
        int l = 0;
        long long sum = 0;
        for (int r = 1; r < n; r++)
        {
            sum += (long long)(nums[r] - nums[r - 1]) * (r - l);
            while (sum > k)
            {
                sum -= nums[r] - nums[l];
                l++;
            }
            ans = max(ans, r - l + 1);
        }
        return ans;
    }
};