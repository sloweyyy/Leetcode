class Solution {
public:
    string minWindow(string s, string t) {
        int n = s.size(), m = t.size();
        if (n < m) return "";
        
        vector<int> freq(128, 0);
        for (char c : t) ++freq[c];
        
        int left = 0, right = 0, count = m, minLen = INT_MAX, minStart = 0;
        while (right < n) {
            if (freq[s[right++]]-- > 0) --count;
            while (count == 0) {
                if (right - left < minLen) {
                    minLen = right - left;
                    minStart = left;
                }
                if (freq[s[left++]]++ == 0) ++count;
            }
        }
        
        return minLen == INT_MAX ? "" : s.substr(minStart, minLen);
    }
};