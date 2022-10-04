---
date: 2022-10-04
title: 112. Path Sum
description:
    Return true if sum of nodes of root-to-leaf path equals targetSum.
difficulty:
    - easy
runtime: 21.88 # faster than (in %)
memory usage: 5.43    # less than (in %)
dsa:    # Data Structures and Algorithms (refer to DSA.yml)
    - binary-trees
---
## Description
Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg](https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg)

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

```
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

```

**Example 3:**

```
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.

```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 5000]`.
- `1000 <= Node.val <= 1000`
- `1000 <= targetSum <= 1000`

## Approach 1: DFS
Time complexity: `O(n)` where `n` is the number of nodes.
Space complexity: `O(log(n))`

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def hasPathSum(self, root, targetSum):
        """
        :type root: TreeNode
        :type targetSum: int
        :rtype: bool
        """
        
        def dfs(node, prevSum):
            
            if node is None:
                return False
            
            if not node.left and not node.right:    # node is a leaf
                return (node.val + prevSum) == targetSum
            
            newSum = prevSum + node.val
            
            return dfs(node.left, newSum) or dfs(node.right, newSum)    # if the first condition is true, the second one is not evaluated
        
        return dfs(root, 0)
```