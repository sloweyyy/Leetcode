/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (!root) return -1;

  const levelSum: number[] = [];
  
  const dfs = (node: TreeNode | null, level: number) => {
    if (node === null) return;
    if (levelSum[level] === undefined) levelSum[level] = 0;
    levelSum[level] += node.val;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  
  dfs(root, 0);
  levelSum.sort((a, b) => b - a);
  
  return k <= levelSum.length ? levelSum[k - 1] : -1;  
}