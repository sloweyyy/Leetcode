class Solution
{
public:
    vector<int> findArray(vector<int> &pref)
    {
        vector<int> arr;
        int x = 0;
        for (int i = 0; i < pref.size(); i++)
        {
            if (i == 0)
            {
                arr.push_back(pref[i]);
                x = pref[i];
            }
            else
            {
                int curr = pref[i] ^ x;
                arr.push_back(curr);
                x ^= curr;
            }
        }
        return arr;
    }
};