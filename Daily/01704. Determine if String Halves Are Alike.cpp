class Solution {
public:
    bool halvesAreAlike(string s) {
        string vowels = "aeiouAEIOU";
        int count = 0;
        for (int i = 0; i < s.size() / 2; i++)
            if (vowels.find(s[i]) != string::npos)
                count++;
        for (int i = s.size() / 2; i < s.size(); i++)
            if (vowels.find(s[i]) != string::npos)
                count--;
        return count == 0;
    }
};