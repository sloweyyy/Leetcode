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

function partition(head: ListNode | null, x: number): ListNode | null {
    const dummy1 = new ListNode();
    const dummy2 = new ListNode();
    let cur1 = dummy1;
    let cur2 = dummy2;

    while (head) {
        if (head.val < x) {
            cur1.next = head;
            cur1 = cur1.next;
        } else {
            cur2.next = head;
            cur2 = cur2.next;
        }
        head = head.next;
    }

    cur2.next = null;
    cur1.next = dummy2.next;
    return dummy1.next;
}
