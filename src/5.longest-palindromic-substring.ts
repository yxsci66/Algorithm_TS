/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (33.50%)
 * Likes:    28692
 * Dislikes: 1715
 * Total Accepted:    2.9M
 * Total Submissions: 8.7M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 *
 */

// @lc code=start
export function longestPalindrome(s: string): string {
  function getStr(left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }
  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    const single = getStr(i, i);
    const double = getStr(i, i + 1);
    if (single.length > maxStr.length) {
      maxStr = single;
    }
    if (double.length > maxStr.length) {
      maxStr = double;
    }
  }
  return maxStr;
}
// @lc code=end
