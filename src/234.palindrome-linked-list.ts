/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (51.52%)
 * Likes:    15768
 * Dislikes: 855
 * Total Accepted:    1.7M
 * Total Submissions: 3.3M
 * Testcase Example:  '[1,2,2,1]'
 *
 * Given the head of a singly linked list, return true if it is a palindrome or
 * false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,2,1]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [1, 10^5].
 * 0 <= Node.val <= 9
 *
 *
 *
 * Follow up: Could you do it in O(n) time and O(1) space?
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
 * (recursive call)
 * Check if a given linked list is a palindrome.
 * @param {ListNode | null} head - The head of the linked list
 * @returns {boolean} - True if the linked list is a palindrome, false otherwise
 */
/* export function isPalindrome(head: ListNode | null): boolean {
  function isPalindromRecursive(recursiveHead: ListNode | null): boolean {
    if (recursiveHead === null) {
      return true;
    }
    const next: boolean = isPalindromRecursive(recursiveHead.next);
    const valid: boolean = recursiveHead.val === head!.val;
    head = head!.next;
    return next && valid;
  }
  return isPalindromRecursive(head);
} */

/**
 * string appending prefix comparing with string ending suffix
 * Check if a given linked list is a palindrome.
 * @param {ListNode | null} head - The head of the linked list
 * @returns {boolean} - True if the linked list is a palindrome, false otherwise
 */
export function isPalindrome(head: ListNode): boolean {
  let leftToRightString: string = "";
  let rightToLeftString: string = "";

  let current: ListNode | null = head;
  while (current) {
    leftToRightString += String(current.val);
    rightToLeftString = String(current.val) + rightToLeftString;
    current = current.next;
  }
  return leftToRightString === rightToLeftString;
}
// @lc code=end
