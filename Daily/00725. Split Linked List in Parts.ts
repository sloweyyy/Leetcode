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

function splitListToParts(
    head: ListNode | null,
    k: number,
): Array<ListNode | null> {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    let result = new Array(k).fill(null);
    let partLength = Math.floor(length / k);
    let extra = length % k;

    current = head;
    for (let i = 0; i < k; i++) {
        if (!current) break;
        result[i] = current;
        let partSize = partLength + (extra-- > 0 ? 1 : 0);
        for (let j = 0; j < partSize - 1; j++) {
            current = current.next;
        }
        let next = current.next;
        current.next = null;
        current = next;
    }

    return result;
}
