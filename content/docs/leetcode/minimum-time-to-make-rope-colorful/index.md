---
date: 2022-10-03
title: 1578. Minimum Time to Make Rope Colorful
description:
    n ballons on a rope, remove balloons so that no 2 consecutive ballons of the same color, minimizing time.
difficulty:
    - medium
runtime: 10.67 # faster than (in %)
memory usage: 82.02    # less than (in %)
dsa:    # Data Structures and Algorithms (refer to DSA.yml)
    - arrays
    - strings
    - dynamic-programming
    - greedy-algorithms-and-invariants
---
## Description
Alice has `n` balloons arranged on a rope. You are given a **0-indexed** string `colors` where `colors[i]` is the color of the `ith` balloon.

Alice wants the rope to be **colorful**. She does not want **two consecutive balloons** to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it **colorful**. You are given a **0-indexed**integer array `neededTime` where `neededTime[i]` is the time (in seconds) that Bob needs to remove the `ith` balloon from the rope.

Return *the **minimum time** Bob needs to make the rope **colorful***.

**Example 1:**

![ballon1.jpeg](https://assets.leetcode.com/uploads/2021/12/13/ballon1.jpg)

**Input:** colors = "abaac", neededTime = [1,2,3,4,5]

**Output:** 3

**Explanation:** In the above image, 'a' is blue, 'b' is red, and 'c' is green.

Bob can remove the blue balloon at index 2. This takes 3 seconds.

There are no longer two consecutive balloons of the same color. Total time = 3.

**Example 2:**

![balloon2.jpeg](https://assets.leetcode.com/uploads/2021/12/13/balloon2.jpg)

**Input:** colors = "abc", neededTime = [1,2,3]

**Output:** 0

**Explanation:** The rope is already colorful. Bob does not need to remove any balloons from the rope.

**Example 3:**

![balloon3.jpeg](https://assets.leetcode.com/uploads/2021/12/13/balloon3.jpg)

**Input:** colors = "aabaa", neededTime = [1,2,3,4,1]

**Output:** 2

**Explanation:** Bob will remove the ballons at indices 0 and 4. Each ballon takes 1 second to remove.

There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.

**Constraints:**

- `n == colors.length == neededTime.length`
- `1 <= n <= 105`
- `1 <= neededTime[i] <= 104`
- `colors` contains only lowercase English letters.

## Approach 1: Two Pointers
Time complexity: `O(n)`
Space complexity: `O(1)`

```python
class Solution(object):
    def minCost(self, colors, neededTime):
        """
        :type colors: str
        :type neededTime: List[int]
        :rtype: int
        """
        
        minTimeColorful = 0
        
        i, n = 0, len(colors)
        
        while i < n:
            
            j = i+1
            minTimeToRemoveConsB = neededTime[i]
            maxNeededTime = neededTime[i]
            
            while j < n and colors[j] == colors[i]:
                if neededTime[j] > maxNeededTime:
                    maxNeededTime = neededTime[j]
                minTimeToRemoveConsB += neededTime[j]
                j += 1
            
            minTimeToRemoveConsB -= maxNeededTime
            minTimeColorful += minTimeToRemoveConsB
            
            i = j
        
        return minTimeColorful
```