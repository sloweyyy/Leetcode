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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const set = new Set(nums);
    let dummy = new ListNode(0, head);
    let current = dummy;
    while (current.next) {
        if (set.has(current.next.val)) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return dummy.next;
}
