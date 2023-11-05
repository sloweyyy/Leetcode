class Solution
{
public:
    int getWinner(vector<int> &arr, int k)
    {
        int ans = arr[0], win = 0;
        for (int i = 1; i < arr.size(); i++)
        {
            if (arr[i] > ans)
            {
                ans = arr[i];
                win = 0;
            }
            if (++win == k)
                return ans;
        }
        return ans;
    }
};