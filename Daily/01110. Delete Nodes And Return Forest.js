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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    const result = [];
    const toDeleteSet = new Set(to_delete);

    function dfs(node, isRoot) {
        if (!node) return null;

        const isDeleted = toDeleteSet.has(node.val);

        if (isRoot && !isDeleted) {
            result.push(node);
        }

        node.left = dfs(node.left, isDeleted);
        node.right = dfs(node.right, isDeleted);

        return isDeleted ? null : node;
    }

    dfs(root, true);

    return result;
};
