/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (57.09%)
 * Likes:    11213
 * Dislikes: 334
 * Total Accepted:    744.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[4,2,1,3]'
 *
 * Given the head of a linked list, return the list after sorting it in
 * ascending order.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
 *
 *
 * Example 3:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [0, 5 * 10^4].
 * -10^5 <= Node.val <= 10^5
 *
 *
 *
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory
 * (i.e. constant space)?
 *
 */

import { ListNode } from "../data_structure/module";
import { mergeTwoLists } from "./21.merge-two-sorted-lists";

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
 * base on arr and Array.sort
 * Sorts the given linked list in ascending order and returns the sorted list.
 *
 * @param {ListNode | null} head - the head of the linked list to be sorted
 * @return {ListNode | null} the head of the sorted linked list
 */
// export function sortList(head: ListNode | null): ListNode | null {
//   const arr = [] as ListNode[];
//   while (head) {
//     arr.push(new ListNode(head.val));
//     head = head.next;
//   }
//   arr.sort((pre, next) => {
//     return pre.val - next.val;
//   });
//   const retNode = new ListNode();
//   arr.reduce((pre, node) => {
//     pre.next = new ListNode(node.val);
//     return pre.next;
//   }, retNode);
//   return retNode.next;
// }

/**
 * O(n logn) time and O(1) memory
 * Sorts the given list in ascending order using merge sort algorithm.
 *
 * @param {ListNode | null} head - the head of the list to be sorted
 * @return {ListNode | null} the head of the sorted list
 */
export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  const mid = slow!.next;
  slow!.next = null;
  return mergeTwoLists(sortList(head), sortList(mid));
}
// @lc code=end
