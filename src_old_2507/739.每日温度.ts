/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 *
 * https://leetcode.cn/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (69.38%)
 * Likes:    1917
 * Dislikes: 0
 * Total Accepted:    694.7K
 * Total Submissions: 1M
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i
 * 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 *
 *
 * 示例 2:
 *
 *
 * 输入: temperatures = [30,40,50,60]
 * 输出: [1,1,1,0]
 *
 *
 * 示例 3:
 *
 *
 * 输入: temperatures = [30,60,90]
 * 输出: [1,1,0]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= temperatures.length <= 10^5
 * 30 <= temperatures[i] <= 100
 *
 *
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  // 单调栈
  const ret = Array.from({ length: temperatures.length }).map(() => 0);
  // 栈前大于栈后
  const stack = [] as number[];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i]! > temperatures[stack[stack.length - 1]!]!
    ) {
      const j = stack.pop()!;
      ret[j]! = i - j;
    }
    stack.push(i);
  }

  return ret;
}
// @lc code=end
