class Solution {
public:
    bool makeEqual(vector<string>& words) {
        int n = words.size();
        unordered_map<char, int> mp;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < words[i].size(); j++) {
                mp[words[i][j]]++;
            }
        }
        for(auto it = mp.begin(); it != mp.end(); it++) {
            if(it->second % n != 0) return false;
        }
        return true;      
    }
};