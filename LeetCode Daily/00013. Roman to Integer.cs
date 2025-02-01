public class Solution {
    public int RomanToInt(string s) {
        var result = 0;
        var n = s.Length;
        var map = new Dictionary<char, int> {
            {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50},
            {'C', 100}, {'D', 500}, {'M', 1000}
        };
        
        for (int i = 0; i < n; ++i) {
            if (i < n - 1 && map[s[i]] < map[s[i + 1]]) {
                result -= map[s[i]];
            } else {
                result += map[s[i]];
            }
        }
        
        return result;
    }
}