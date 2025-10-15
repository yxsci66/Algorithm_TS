/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (73.99%)
 * Likes:    20550
 * Dislikes: 880
 * Total Accepted:    1.7M
 * Total Submissions: 2.3M
 * Testcase Example:  '3'
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start
export function generateParenthesis(n: number): string[] {
  const arr = [] as string[];
  function getStr(open: number, close: number, str: string): void {
    if (close === 0) {
      arr.push(str);
      return;
    }
    if (open < close) {
      getStr(open, close - 1, str + ")");
    }
    if (open > 0) {
      getStr(open - 1, close, str + "(");
    }
    return;
  }
  getStr(n, n, "");
  return arr;
}
// @lc code=end
