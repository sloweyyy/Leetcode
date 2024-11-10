class Solution
{
public:
    int minSteps(string s, string t)
    {
        int count = 0;
        int arr[26] = {0};
        for (int i = 0; i < s.length(); i++)
        {
            arr[s[i] - 'a']++;
        }
        for (int i = 0; i < t.length(); i++)
        {
            if (arr[t[i] - 'a'] > 0)
            {
                arr[t[i] - 'a']--;
            }
            else
            {
                count++;
            }
        }
        return count;
    }
};