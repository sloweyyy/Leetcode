/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    const res: number[][] = Array.from({ length: m }, () => Array.from({ length: n }, () => -1));
    let node = head;

    // Define boundaries for spiral traversal
    let top = 0, bottom = m - 1;
    let left = 0, right = n - 1;

    // Continue placing values in spiral order
    while (node && top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let j = left; j <= right && node; j++) {
            res[top][j] = node.val;
            node = node.next;
        }
        top++; // Move the top boundary down

        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom && node; i++) {
            res[i][right] = node.val;
            node = node.next;
        }
        right--; // Move the right boundary left

        // Traverse from right to left along the bottom row
        for (let j = right; j >= left && node; j--) {
            res[bottom][j] = node.val;
            node = node.next;
        }
        bottom--; // Move the bottom boundary up

        // Traverse from bottom to top along the left column
        for (let i = bottom; i >= top && node; i--) {
            res[i][left] = node.val;
            node = node.next;
        }
        left++; // Move the left boundary right
    }

    return res;
}
