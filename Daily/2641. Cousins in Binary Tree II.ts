/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.left = (left === undefined ? null : left);
 *         this.right = (right === undefined ? null : right);
 *     }
 * }
 */

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    const depthSum: number[] = [];

    // First DFS to calculate the sum of node values at each depth
    function dfs1(node: TreeNode | null, depth: number): void {
        if (!node) return;

        if (depth >= depthSum.length) {
            depthSum.push(node.val);
        } else {
            depthSum[depth] += node.val;
        }

        dfs1(node.left, depth + 1);
        dfs1(node.right, depth + 1);
    }

    // Second DFS to replace node values
    function dfs2(node: TreeNode | null, val: number, depth: number): void {
        if (!node) return;

        node.val = val;

        let cousinSum = depth + 1 < depthSum.length ? depthSum[depth + 1] : 0;
        cousinSum -= (node.left?.val ?? 0);
        cousinSum -= (node.right?.val ?? 0);

        if (node.left) dfs2(node.left, cousinSum, depth + 1);
        if (node.right) dfs2(node.right, cousinSum, depth + 1);
    }

    // Execute the two DFS passes
    dfs1(root, 0);
    dfs2(root, 0, 0);

    return root;
}