
class Solution {

    public boolean areAlmostEqual(String s1, String s2) {
        if (s1.equals(s2)) {
            return true;
        }

        int diffCount = 0;
        int[] diffIndex = new int[2];
        for (int i = 0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                diffCount++;
                if (diffCount > 2) {
                    return false;
                }
                diffIndex[diffCount - 1] = i;
            }
        }

        return diffCount == 2 && s1.charAt(diffIndex[0]) == s2.charAt(diffIndex[1]) && s1.charAt(diffIndex[1]) == s2.charAt(diffIndex[0]);
    }
}
