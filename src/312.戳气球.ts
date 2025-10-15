/*
 * @lc app=leetcode.cn id=312 lang=typescript
 *
 * [312] 戳气球
 *
 * https://leetcode.cn/problems/burst-balloons/description/
 *
 * algorithms
 * Hard (70.87%)
 * Likes:    1430
 * Dislikes: 0
 * Total Accepted:    136.7K
 * Total Submissions: 192.9K
 * Testcase Example:  '[3,1,5,8]'
 *
 * 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
 *
 * 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i
 * - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。
 *
 * 求所能获得硬币的最大数量。
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,1,5,8]
 * 输出：167
 * 解释：
 * nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
 * coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,5]
 * 输出：10
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= n <= 300
 * 0 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
function maxCoins(nums: number[]): number {
  const n = nums.length;
  const dp: number[][] = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  const newNums = [1, ...nums, 1];
  
  for (let len = 1; len <= n; len++) {
    for (let start = 1; start <= n - len + 1; start++) {
      const end = start + len - 1;
      for (let k = start; k <= end; k++) {
        dp[start]![end] = Math.max(dp[start]![end]!, 
          dp[start]![k - 1]! + dp[k + 1]![end]! + newNums[start - 1]! * newNums[k]! * newNums[end + 1]!);
      }
    }
  }
  return dp[1]![n]!;
}
// @lc code=end
