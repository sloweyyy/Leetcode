function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var mergeNodes = function (head) {
    let dummyHead = new ListNode(0);
    let tail = dummyHead;
    let current = head.next;
    let sum = 0;

    while (current !== null) {
        if (current.val !== 0) {
            sum += current.val;
        } else {
            if (sum > 0) {
                tail.next = new ListNode(sum);
                tail = tail.next;
                sum = 0;
            }
        }
        current = current.next;
    }

    return dummyHead.next;
};
