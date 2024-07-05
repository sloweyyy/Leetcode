class Solution {
    public int[] nodesBetweenCriticalPoints(ListNode head) {
        if (head == null || head.next == null || head.next.next == null) {
            return new int[] { -1, -1 };
        }

        int firstCritical = -1;
        int lastCritical = -1;
        int minDistance = Integer.MAX_VALUE;

        ListNode prev = head;
        ListNode curr = head.next;
        ListNode next = curr.next;
        int index = 1;
        int prevCriticalIndex = -1;

        while (next != null) {
            if ((curr.val > prev.val && curr.val > next.val) || (curr.val < prev.val && curr.val < next.val)) {
                if (firstCritical == -1) {
                    firstCritical = index;
                } else {
                    minDistance = Math.min(minDistance, index - prevCriticalIndex);
                }
                prevCriticalIndex = index;
                lastCritical = index;
            }
            prev = curr;
            curr = next;
            next = next.next;
            index++;
        }

        if (firstCritical == lastCritical) {
            return new int[] { -1, -1 };
        }

        return new int[] { minDistance, lastCritical - firstCritical };
    }
}
