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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    let result = 0;

    function dfs(node) {
        if (!node) return [];

        if (!node.left && !node.right) return [1];

        const left = dfs(node.left);
        const right = dfs(node.right);

        for (const l of left) {
            for (const r of right) {
                if (l + r <= distance) {
                    result++;
                }
            }
        }

        return [...left, ...right]
            .map((d) => d + 1)
            .filter((d) => d <= distance);
    }

    dfs(root);

    return result;
};
