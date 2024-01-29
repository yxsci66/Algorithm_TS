/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (42.05%)
 * Likes:    29753
 * Dislikes: 5815
 * Total Accepted:    4.2M
 * Total Submissions: 10.1M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 *
 * Example 1:
 *
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 *
 * Example 2:
 *
 *
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 *
 * Example 3:
 *
 *
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have
 * leading zeros.
 *
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

/**
 * (Loop-While)Adds two numbers represented by linked lists.
 *
 * @param {ListNode | null} l1 - The first linked list
 * @param {ListNode | null} l2 - The second linked list
 * @return {ListNode | null} The sum of the two linked lists
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l = new ListNode();
  const returnList = l;
  let lastCarry = 0;
  while (l1 || l2 || lastCarry) {
    l.next = new ListNode();
    l = l.next as ListNode;
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + lastCarry;
    l.val = sum % 10;
    lastCarry = parseInt((sum / 10).toString());
    l1 = l1?.next as ListNode;
    l2 = l2?.next as ListNode;
  }
  return returnList.next;
}

/**
 * (Recursive-Function)Adds two numbers represented by linked lists.
 *
 * @param {ListNode | null} l1 - The head of the first linked list
 * @param {ListNode | null} l2 - The head of the second linked list
 * @param {number} lastCarry - The carry value
 * @return {ListNode | null} The head of the resulting linked list
 */
// export function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null,
//   lastCarry = 0
// ): ListNode | null {
//   if (!l1 && !l2 && !lastCarry) return null;

//   const total: number = (l1?.val ?? 0) + (l2?.val ?? 0) + (lastCarry ?? 0);
//   lastCarry = parseInt(total / 10 + "");
//   return new ListNode(
//     total % 10,
//     addTwoNumbers(l1?.next as ListNode, l2?.next as ListNode, lastCarry)
//   );
// }
// @lc code=end
