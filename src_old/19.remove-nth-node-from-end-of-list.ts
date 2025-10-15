/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (43.60%)
 * Likes:    17868
 * Dislikes: 748
 * Total Accepted:    2.4M
 * Total Submissions: 5.5M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given the head of a linked list, remove the n^th node from the end of the
 * list and return its head.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1], n = 1
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 *
 * Follow up: Could you do this in one pass?
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
 * （quick-slow point）Removes the nth node from the end of a singly linked list.
 *
 * @param {ListNode | null} head - The head of the linked list
 * @param {number} n - The position of the node to be removed from the end
 * @return {ListNode | null} The head of the updated linked list
 */
export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let fastP: ListNode | null = head;
  let slowP: ListNode | null = head;
  for (let i = 0; i < n; i++) {
    fastP = fastP?.next ?? null;
  }
  // n >= listLength
  if (!fastP) {
    return head?.next ?? null;
  }
  // n < listLength
  while (fastP.next) {
    fastP = fastP.next;
    slowP = slowP?.next ?? null;
  }
  slowP!.next = slowP!.next?.next ?? null;
  return head;
}

/**
 * (while-loop)Removes the nth node from the end of a linked list.
 *
 * @param {ListNode | null} head - The head of the linked list.
 * @param {number} n - The position of the node to be removed.
 * @return {ListNode | null} - The head of the modified linked list.
 */
// export function removeNthFromEnd(
//   head: ListNode | null,
//   n: number
// ): ListNode | null {
//   let node: ListNode | null = head;
//   let returnNode: ListNode | null = new ListNode(0, head);
//   head = returnNode;
//   // loop-end, get the listLength.
//   let listLength = 0;
//   while (node) {
//     listLength++;
//     node = node.next;
//   }
//   // loop to the last n node
//   let length = 0;
//   while (length + n < listLength) {
//     if (head?.next?.next) {
//       head = head?.next;
//     } else {
//       break;
//     }
//     length++;
//   }
//   if (length + n === listLength) {
//     head.next = head?.next?.next as ListNode | null;
//   } else {
//     returnNode = null;
//   }
//   return returnNode?.next ?? null;
// }
// @lc code=end
