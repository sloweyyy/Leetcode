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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let node = head;

    // Traverse the list until the second last node
    while (node && node.next) {
        const nextNode = node.next;
        const gcdValue = getGCD(node.val, nextNode.val);

        // Insert new node with GCD value between current and next node
        const gcdNode = new ListNode(gcdValue);
        gcdNode.next = nextNode;
        node.next = gcdNode;

        // Move to the next pair of nodes (skip the GCD node)
        node = nextNode;
    }

    return head;
}

function getGCD(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
