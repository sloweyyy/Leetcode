
class Solution {

    public boolean canConstruct(String s, int k) {
        if (s.length() < k) {
            return false;
        }

        if (s.length() == k) {
            return true;
        }

        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        int oddCount = 0;
        for (int i = 0; i < 26; i++) {
            if (count[i] % 2 == 1) {
                oddCount++;
            }
        }

        return oddCount <= k;
    }
}
