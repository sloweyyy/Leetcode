/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public int pseudoPalindromicPaths(TreeNode root) {
        int[] res = new int[1];
        dfs(root, new int[10], res);
        return res[0];
    }

    private void dfs(TreeNode root, int[] count, int[] res) {
        if (root == null) {
            return;
        }
        count[root.val]++;
        if (root.left == null && root.right == null) {
            if (isPalindromic(count)) {
                res[0]++;
            }
        }
        dfs(root.left, count, res);
        dfs(root.right, count, res);
        count[root.val]--;
    }

    private boolean isPalindromic(int[] count) {
        int odd = 0;
        for (int i = 1; i < count.length; i++) {
            if (count[i] % 2 == 1) {
                odd++;
            }
        }
        return odd <= 1;
    }

    
}