/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
 *
 * https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (59.54%)
 * Likes:    1272
 * Dislikes: 0
 * Total Accepted:    255.4K
 * Total Submissions: 428.8K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 *
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 *
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 /
 * 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 *
 * 提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode
 * 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,null,null,4,5]
 * 输出：[1,2,3,null,null,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = [1,2]
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中结点数在范围 [0, 10^4] 内
 * -1000 <= Node.val <= 1000
 *
 *
 */

import { ListNode, TreeNode } from "../data_structure/module";

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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const path = [] as string[];
  if (!root) {
    return "-";
  }
  function bfs(nodes: Array<TreeNode | null>) {
    if (nodes.length === 0 || nodes.every((e) => !e)) {
      return;
    }
    const _nodes = nodes.reduce(
      (pre, cur) => {
        path.push(`${cur?.val}?? "-"`);
        return [...pre, cur?.left ?? null, cur?.right ?? null];
      },
      [] as (TreeNode | null)[]
    );
    bfs(_nodes);
  }
  bfs([root]);
  return path.join("");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const path = data.split("");
  let ret = new TreeNode();
  if(path[0] === '-'){
    return   ret;
  }
  function setTree(node:TreeNode,index:number){
    if(index >= path.length){
      return;
    }
    const val = path[index];
    if(val === '-'){
      node = null;
    }else{
      node.le
    }
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
