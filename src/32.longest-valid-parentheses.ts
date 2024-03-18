/*
 * @lc app=leetcode id=32 lang=typescript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (33.91%)
 * Likes:    12143
 * Dislikes: 390
 * Total Accepted:    715K
 * Total Submissions: 2.1M
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', return the length
 * of the longest valid (well-formed) parentheses substring.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 *
 *
 * Example 2:
 *
 *
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 *
 *
 * Example 3:
 *
 *
 * Input: s = ""
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 3 * 10^4
 * s[i] is '(', or ')'.
 *
 *
 */

// @lc code=start
export function longestValidParentheses(s: string): number {
  const arrIndex = [] as number[];
  let ans = 0;
  for (let i = 0, j = -1; i < s.length; i++) {
    if (s[i] === "(") {
      arrIndex.push(i);
    } else {
      if (arrIndex.length > 0) {
        arrIndex.pop();
        let top = j;
        if (arrIndex.length > 0) {
          top = arrIndex[arrIndex.length - 1]!;
        }
        ans = Math.max(ans, i - top);
      } else {
        j = i;
      }
    }
  }
  return ans;
}

// @lc code=end
