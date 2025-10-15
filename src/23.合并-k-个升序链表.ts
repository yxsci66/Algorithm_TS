/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
 *
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (61.28%)
 * Likes:    2974
 * Dislikes: 0
 * Total Accepted:    953.1K
 * Total Submissions: 1.6M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 *
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 *
 *
 *
 * 示例 1：
 *
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 *
 *
 * 示例 2：
 *
 * 输入：lists = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 * 输入：lists = [[]]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length <= 1 || lists.every((e) => !e)) {
    return lists[0] ?? null;
  }

  let node = new ListNode();
  const root = node;

  while (lists.some((e) => !!e)) {
    let index = 0;
    const val = lists.reduce((pre, cur, curIndex) => {
      const curVal = cur?.val ?? Infinity;
      if (curVal < pre) {
        index = curIndex;
        return curVal;
      }
      return pre;
    }, Infinity);
    node.val = val;
    // Update the list with the next node
    lists[index] = lists[index]!.next;

    const flag = lists.some((e) => !!e);
    if (!flag) {
      break;
    }
    // Create a new node and link it to the previous node
    const nextNode = new ListNode();
    node.next = nextNode;
    node = nextNode;
  }
  return root;
}

// @lc code=end
