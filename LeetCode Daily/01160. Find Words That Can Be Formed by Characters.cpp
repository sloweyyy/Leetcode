class Solution
{
public:
    int countCharacters(vector<string> &words, string chars)
    {
        int ans = 0;
        vector<int> freq(26, 0);
        for (char &ch : chars)
            freq[ch - 'a']++;
        for (string &word : words)
        {
            vector<int> freq2(26, 0);
            for (char &ch : word)
                freq2[ch - 'a']++;
            bool flag = true;
            for (int i = 0; i < 26; i++)
                if (freq2[i] > freq[i])
                {
                    flag = false;
                    break;
                }
            if (flag)
                ans += word.size();
        }
        return ans;
    }
};