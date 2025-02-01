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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const result: ListNode = new ListNode();
    let current: ListNode = result;
    let stack: ListNode[] = [];
    while (head) {
        stack.push(head);
        head = head.next;
        if (stack.length === k) {
            while (stack.length > 0) {
                current.next = stack.pop();
                current = current.next;
            }
        }
    }
    while (stack.length > 0) {
        current.next = stack.shift();
        current = current.next;
    }
    current.next = null;
    return result.next;
}
