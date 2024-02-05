/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (63.73%)
 * Likes:    11619
 * Dislikes: 427
 * Total Accepted:    1.3M
 * Total Submissions: 2M
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head. You
 * must solve the problem without modifying the values in the list's nodes
 * (i.e., only nodes themselves may be changed.)
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 *
 *
 * Example 2:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
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
 * (Recursive-Function)Swaps pairs of nodes in a linked list.
 *
 * @param {ListNode} head - the head of the linked list
 * @return {ListNode} the head of the modified linked list
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const curr = head;
  const next = head.next;
  const next_next = next.next;

  curr.next = swapPairs(next_next);
  next.next = curr;
  return next;
}

/**
 * (while-loop)Swaps pairs of nodes in a linked list.
 *
 * @param {ListNode | null} head - the head of the linked list
 * @return {ListNode | null} the head of the linked list with pairs swapped
 */
// export function swapPairs(head: ListNode | null): ListNode | null {
//   let loopNode: ListNode | null = new ListNode(0, head);
//   const retNode = loopNode;
//   while (loopNode?.next && loopNode.next.next) {
//     // swap node
//     const nodeOne: ListNode | null = loopNode.next;
//     const nodeTwo: ListNode | null = nodeOne.next;
//     const nodeThree = nodeTwo?.next;

//     nodeOne.next = nodeThree ?? null;
//     nodeTwo!.next = nodeOne;
//     loopNode.next = nodeTwo;

//     loopNode = nodeOne;
//   }
//   return retNode.next;
// }
// @lc code=end
