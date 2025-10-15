/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (53.87%)
 * Likes:    1674
 * Dislikes: 0
 * Total Accepted:    683.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 *
 *
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  const pMap = new Map();
  for (const i of p) {
    pMap.set(i, (pMap.get(i) ?? 0) + 1);
  }
  const ret = [] as number[];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (pMap.has(s[i])) {
      pMap.set(s[i], pMap.get(s[i]) - 1);
    }
    if (i - j + 1 > p.length) {
      if (pMap.has(s[j])) {
        pMap.set(s[j], pMap.get(s[j]) + 1);
      }
      j++;
    }
    if (i - j + 1 === p.length) {
      if ([...pMap.values()].every((v) => v === 0)) {
        ret.push(j);
      }
    }
  }
  return ret;
}
// @lc code=end
