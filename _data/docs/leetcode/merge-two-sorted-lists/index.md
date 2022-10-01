---
date: 2022-10-01
id: merge-two-sorted-lists
title: 21. Merge Two Sorted Lists
description:
    Merge the 2 sorted linked lists in a one sorted linked list.
difficulty: easy
runtime: 20.51 # faster than (in %)
memory usage: 10.37    # less than (in %)
topic:
    - linkedList
    - recursion
---



```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        
        if not list1:
            return list2
        
        if not list2:
            return list1
        
        if list1.val <= list2.val:
            return ListNode(list1.val, self.mergeTwoLists(list1.next, list2))
        else:
            return ListNode(list2.val, self.mergeTwoLists(list1, list2.next))
``` 