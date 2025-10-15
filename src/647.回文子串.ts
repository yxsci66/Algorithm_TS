/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 *
 * https://leetcode.cn/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (67.79%)
 * Likes:    1413
 * Dislikes: 0
 * Total Accepted:    380.4K
 * Total Submissions: 560.7K
 * Testcase Example:  '"abc"'
 *
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 *
 * 回文字符串 是正着读和倒过来读一样的字符串。
 *
 * 子字符串 是字符串中的由连续字符组成的一个序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
function countSubstrings(s: string): number {
  function isReverseStr(s: string): boolean {
    let i;
    const midIndex = (s.length + 1) >> 1;
    for (i = 0; i < midIndex; i++) {
      if (s[i] !== s[s.length - i - 1]) {
        break;
      }
    }
    if (i === midIndex) {
      return true;
    }
    return false;
  }
  let ret = 0;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j + i <= s.length; j++) {
      if (isReverseStr(s.slice(j, j + i))) {
        ret++;
      }
    }
  }
  return ret;
}
// @lc code=end
