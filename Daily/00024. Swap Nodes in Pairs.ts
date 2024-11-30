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

function swapPairs(head: ListNode | null): ListNode | null {
    const result: ListNode = new ListNode();
    let current: ListNode = result;
    while (head && head.next) {
        current.next = head.next;
        current = current.next;
        head.next = head.next.next;
        current.next = head;
        current = current.next;
        head = head.next;
    }
    current.next = head;
    return result.next;
}
