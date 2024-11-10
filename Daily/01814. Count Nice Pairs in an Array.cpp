class Solution
{
public:
    int countNicePairs(vector<int> &nums)
    {
        unordered_map<int, int> mp;
        int ans = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            int rev = 0, temp = nums[i];
            while (temp)
            {
                rev = rev * 10 + temp % 10;
                temp /= 10;
            }
            ans = (ans + mp[nums[i] - rev]) % 1000000007;
            mp[nums[i] - rev]++;
        }
        return ans;
    }
};