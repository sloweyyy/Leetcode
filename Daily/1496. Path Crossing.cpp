class Solution
{
public:
    bool isPathCrossing(string path)
    {
        int x = 0, y = 0;
        set<pair<int, int>> s;
        s.insert({x, y});
        for (char c : path)
        {
            if (c == 'N')
            {
                y++;
            }
            else if (c == 'S')
            {
                y--;
            }
            else if (c == 'E')
            {
                x++;
            }
            else
            {
                x--;
            }
            if (s.find({x, y}) != s.end())
            {
                return true;
            }
            s.insert({x, y});
        }
        return false;
    }
};