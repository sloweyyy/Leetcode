/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const result = [];
    const stack = [];
    let prev = null;
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack[stack.length - 1];
        if (!curr.right || curr.right === prev) {
            result.push(curr.val);
            stack.pop();
            prev = curr;
            curr = null;
        } else {
            curr = curr.right;
        }
    }
    return result;
};
