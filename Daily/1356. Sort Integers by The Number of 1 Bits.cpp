class Solution
{
public:
    vector<int> sortByBits(vector<int> &arr)
    {
        vector<int> ans;
        vector<pair<int, int>> v;
        for (int i = 0; i < arr.size(); i++)
        {
            int x = arr[i];
            int count = 0;
            while (x)
            {
                if (x & 1)
                    count++;
                x >>= 1;
            }
            v.push_back({count, arr[i]});
        }
        sort(v.begin(), v.end());
        for (int i = 0; i < v.size(); i++)
            ans.push_back(v[i].second);
        return ans;
    }
};