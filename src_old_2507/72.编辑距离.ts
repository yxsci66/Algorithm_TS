/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 *
 * https://leetcode.cn/problems/edit-distance/description/
 *
 * algorithms
 * Medium (63.42%)
 * Likes:    3624
 * Dislikes: 0
 * Total Accepted:    614.7K
 * Total Submissions: 968.8K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2：
 *
 *
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= word1.length, word2.length <= 500
 * word1 和 word2 由小写英文字母组成
 *
 *
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  const dp = Array.from({ length: word1.length + 1 }).map(() =>
    Array.from({ length: word2.length + 1 }).map(() => 0)
  );
  dp[0]![0] = 0;
  for (let i = 1; i <= word1.length; i++) {
    dp[i]![0] = i;
  }
  for (let i = 1; i <= word2.length; i++) {
    dp[0]![i] = i;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i]![j] = dp[i - 1]![j - 1]!;
      } else {
        dp[i]![j] =
          Math.min(dp[i - 1]![j - 1]!, dp[i]![j - 1]!, dp[i - 1]![j]!) + 1;
      }
    }
  }
  return dp[word1.length]![word2.length]!;
}
// @lc code=end
