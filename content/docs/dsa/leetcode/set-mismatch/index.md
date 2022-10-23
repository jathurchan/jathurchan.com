---
date: 2022-10-23
title: 645. Set Mismatch
description:
    An array with all integers in [1,n] except one missing number. Find the number that occurs twice and the missing one.
difficulty:
    - easy
runtime: 85.99% # faster than (in %)
memory usage: 98.26%    # less than (in %)
dsa:    # Data Structures and Algorithms (refer to DSA.yml)
    - arrays
    - hash-tables
    - sorting
---
## Description
You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in **repetition of one** number and **loss of another** number.

You are given an integer array `nums` representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return *them in the form of an array*.

**Example 1:**

```
Input: nums = [1,2,2,4]
Output: [2,3]

```

**Example 2:**

```
Input: nums = [1,1]
Output: [1,2]

```

**Constraints:**

- `2 <= nums.length <= 104`
- `1 <= nums[i] <= 104`

## Approach 1: An array to hash every visited number in the list
Time complexity: `O(n)` where `n` is the length of the given list of numbers
Space complexity: `O(n)`

```python
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        found = [False]*n   # index 0 => 1, ... index n-1 => n
        
        twice, missing = -1, -1
        
        for num in nums:
            if found[num-1]:
                twice = num
            found[num-1] = True
        
        for i in range(n):
            if not found[i]:
                missing = i+1
                break
        
        return [twice, missing]
```