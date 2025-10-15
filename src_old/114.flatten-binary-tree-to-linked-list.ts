/*
 * @lc app=leetcode id=114 lang=typescript
 *
 * [114] Flatten Binary Tree to Linked List
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (64.13%)
 * Likes:    11906
 * Dislikes: 551
 * Total Accepted:    903.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * Given the root of a binary tree, flatten the tree into a "linked
 * list":
 *
 *
 * The "linked list" should use the same TreeNode class where the right child
 * pointer points to the next node in the list and the left child pointer is
 * always null.
 * The "linked list" should be in the same order as a pre-order traversal of
 * the binary tree.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,5,3,4,null,6]
 * Output: [1,null,2,null,3,null,4,null,5,null,6]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Can you flatten the tree in-place (with O(1) extra space)?
 */

import { TreeNode } from "../data_structure/module";

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
export function flatten(root: TreeNode | null): void {
  function dfs(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const leftTail: TreeNode | null = dfs(root.left);
    const rightTail: TreeNode | null = dfs(root.right);

    if (root.left) {
      leftTail!.right = root.right;
      root.right = root.left;
      root.left = null;
    }

    return rightTail || leftTail || root;
  }

  dfs(root);
}
// @lc code=end
