class Solution {
public:
    bool isAnagram(string s, string t) {
        int n = s.size();
        int m = t.size();
        if(n != m) return false;
        int arr[26] = {0};
        for(int i = 0; i < n; i++){
            arr[s[i] - 'a']++;
            arr[t[i] - 'a']--;
        }
        for(int i = 0; i < 26; i++){
            if(arr[i] != 0) return false;
        }
        return true;
    }
};