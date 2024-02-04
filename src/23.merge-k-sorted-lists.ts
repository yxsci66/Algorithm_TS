/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (51.85%)
 * Likes:    18928
 * Dislikes: 686
 * Total Accepted:    1.9M
 * Total Submissions: 3.6M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted
 * in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 *
 * Example 1:
 *
 *
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 *
 *
 * Example 2:
 *
 *
 * Input: lists = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: lists = [[]]
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length will not exceed 10^4.
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

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let min = Infinity;
  let arr: Array<number> = [];
  lists = lists.filter((item) => !!item);
  lists.forEach((curNode, i) => {
    if (min === curNode!.val) {
      arr.push(i);
    } else if (min > curNode!.val) {
      arr = [];
      arr.push(i);
      min = curNode!.val;
    }
  });
  arr.forEach((index) => {
    lists[index] = lists[index]!.next;
  });
  if (arr.length === 0) {
    return null;
  }

  return generateList(arr.length, min, mergeKLists(lists));
}
function generateList(
  num: number,
  min: number,
  mergeNode: ListNode | null
): ListNode | null {
  let node = new ListNode(0);
  const retNode = node;
  for (let i = 0; i < num; i++) {
    node.next = new ListNode(min);
    node = node.next;
  }
  node.next = mergeNode;
  return retNode.next;
}
// @lc code=end
