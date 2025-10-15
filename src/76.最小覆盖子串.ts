/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (47.01%)
 * Likes:    3243
 * Dislikes: 0
 * Total Accepted:    791.2K
 * Total Submissions: 1.7M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 *
 *
 *
 * 注意：
 *
 *
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 *
 *
 *
 * 提示：
 *
 *
 * ^m == s.length
 * ^n == t.length
 * 1 <= m, n <= 10^5
 * s 和 t 由英文字母组成
 *
 *
 *
 * 进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const tCount: Map<string, number> = new Map();
  for (const c of t) {
    tCount.set(c, (tCount.get(c) || 0) + 1);
  }

  const windowCount: Map<string, number> = new Map();
  let left = 0;
  let right = 0;
  let need = t.length;
  let minLen = Infinity;
  let minWindow = "";

  while (right < s.length) {
    const c = s[right]!;
    windowCount.set(c, (windowCount.get(c) || 0) + 1);
    if (tCount.has(c) && windowCount.get(c)! <= tCount.get(c)!) {
      need--;
    }
    right++;

    while (need === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        minWindow = s.slice(left, right);
      }
      const c = s[left]!;
      windowCount.set(c, windowCount.get(c)! - 1);
      if (tCount.has(c) && windowCount.get(c)! < tCount.get(c)!) {
        need++;
      }
      left++;
    }
  }

  return minWindow;
}
// @lc code=end
