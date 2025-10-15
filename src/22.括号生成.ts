/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (78.51%)
 * Likes:    3789
 * Dislikes: 0
 * Total Accepted:    982.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const ret = [] as string[];
  // TIP:取值次数决定递归深度
  function backtrack(path: string, leftCount: number) {
    // 达到标准
    if (path.length === 2 * n) {
      ret.push(path);
      return;
    }
    // 左括号达到标准
    if (leftCount  >= n) {
      ret.push(path.padEnd(2 * n, ")"));
      return;
    }
    // 右括号不大于左括号
    if (leftCount * 2 <= path.length) {
      backtrack(path + "(", leftCount + 1);
      return;
    }
    // TIP:取值种类决定递归可选次数
    backtrack(path + "(", leftCount + 1);
    backtrack(path + ")", leftCount);
  }

  backtrack("", 0);
  return ret;
}
// @lc code=end
