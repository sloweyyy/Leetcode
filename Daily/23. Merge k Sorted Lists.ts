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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const result: ListNode = new ListNode();
    let current: ListNode = result;
    const heap: ListNode[] = [];
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            heap.push(lists[i]);
        }
    }
    buildHeap(heap);
    while (heap.length > 0) {
        current.next = heap[0];
        current = current.next;
        if (heap[0].next) {
            heap[0] = heap[0].next;
        } else {
            heap[0] = heap[heap.length - 1];
            heap.pop();
        }
        heapify(heap, 0);
    }
    return result.next;
};

function buildHeap(heap: ListNode[]) {
    for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
        heapify(heap, i);
    }
}

function heapify(heap: ListNode[], index: number) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let smallest = index;
    if (left < heap.length && heap[left].val < heap[smallest].val) {
        smallest = left;
    }
    if (right < heap.length && heap[right].val < heap[smallest].val) {
        smallest = right;
    }
    if (smallest !== index) {
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        heapify(heap, smallest);
    }
}