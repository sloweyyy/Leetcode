
/**
 * Definition for a binary tree node.
 */
import java.util.LinkedList;
import java.util.Queue;

class Solution111 {
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public int findBottomLeftValue(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int result = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            result = queue.peek().val;
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (node.left != null)
                    queue.add(node.left);
                if (node.right != null)
                    queue.add(node.right);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Solution111 s = new Solution111();
        TreeNode root = s.new TreeNode(2, s.new TreeNode(1), s.new TreeNode(3));
        System.out.println(s.findBottomLeftValue(root));
    }

}