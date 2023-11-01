class Solution
{
public:
    int countWords(vector<string> &words1, vector<string> &words2)
    {
        unordered_map<string, pair<int, int>> map;
        int count = 0;
        for (int i = 0; i < words1.size(); i++)
        {
            map[words1[i]].first++;
        }
        for (int i = 0; i < words2.size(); i++)
        {
            map[words2[i]].second++;
        }
        for (auto it : map)
        {
            if (it.second.first == 1 && it.second.second == 1)
                count++;
        }
        return count;
    }
};