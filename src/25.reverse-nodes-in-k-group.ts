/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (57.65%)
 * Likes:    13169
 * Dislikes: 656
 * Total Accepted:    855.9K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given the head of a linked list, reverse the nodes of the list k at a time,
 * and return the modified list.
 *
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes, in the end, should remain as it is.
 *
 * You may not alter the values in the list's nodes, only nodes themselves may
 * be changed.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2,3,4,5], k = 3
 * Output: [3,2,1,4,5]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is n.
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 *
 *
 *
 * Follow-up: Can you solve the problem in O(1) extra memory space?
 *
 */

import { ListNode } from "../data_structure/module";

// @lc code=start
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

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (!head || k <= 1) {
    return head;
  }

  let count = 0;
  let currentNode: ListNode | null = head;
  while (currentNode && count < k) {
    count++;
    currentNode = currentNode?.next;
  }

  if (count < k) {
    return head;
  }

  count = 0;
  let prevNode: ListNode | null = null;
  let nextNode: ListNode | null = null;
  let current: ListNode | null = head;
  while (current && count < k) {
    count++;
    nextNode = current.next;
    current.next = prevNode;
    prevNode = current;
    current = nextNode;
  }
  head.next = reverseKGroup(nextNode, k);
  return prevNode;
}
// @lc code=end
