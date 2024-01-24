class Solution {
    public int maxLength(List<String> arr) {
        int[] res = new int[1];
        dfs(arr, 0, "", res);
        return res[0];
    }

    private void dfs(List<String> arr, int index, String path, int[] res) {
        if (index == arr.size() && unique(path)) {
            res[0] = Math.max(res[0], path.length());
            return;
        }
        if (index == arr.size()) {
            return;
        }
        dfs(arr, index + 1, path, res);
        dfs(arr, index + 1, path + arr.get(index), res);
    }

    private boolean unique(String path) {
        int[] count = new int[26];
        for (char c : path.toCharArray()) {
            count[c - 'a']++;
            if (count[c - 'a'] > 1) {
                return false;
            }
        }
        return true;
    }
}