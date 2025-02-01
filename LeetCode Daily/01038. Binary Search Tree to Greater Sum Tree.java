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
    public TreeNode bstToGst(TreeNode root) {
        dfs(root, 0);
        return root;
    }

    private int dfs(TreeNode root, int sum) {
        if (root == null) {
            return sum;
        }
        root.val += dfs(root.right, sum);
        return dfs(root.left, root.val);
    }
}