# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        if not head:
            return head

        curr = head
        n = 1
        while curr.next:
            curr = curr.next
            n += 1
        curr.next = head

        curr = head
        for _ in range(n-k % n-1):
            curr = curr.next
        new_head = curr.next
        curr.next = None

        return new_head
