public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if (strs.Length == 0)
        {
            return string.Empty;
        }
        
        var result = strs[0];
        
        for (int i = 1; i < strs.Length; ++i)
        {
            while (strs[i].IndexOf(result) != 0)
            {
                result = result.Substring(0, result.Length - 1);
            }
        }
        
        return result;
    }
}