/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (53.49%)
 * Likes:    30009
 * Dislikes: 1078
 * Total Accepted:    4.3M
 * Total Submissions: 8.1M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * You are given an array prices where prices[i] is the price of a given stock
 * on the i^th day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you
 * cannot achieve any profit, return 0.
 *
 *
 * Example 1:
 *
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you
 * must buy before you sell.
 *
 *
 * Example 2:
 *
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit =
 * 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 *
 *
 */

// @lc code=start
export function maxProfit(prices: number[]): number {
  const dp = Array.from({ length: prices.length }).fill([0, 0]) as Array<
    [number, number]
  >;
  // 初始化
  // [i][0]:第i天持有;[i][1]第i天不持有
  dp[0]![0] = -prices[0]!;
  for (let i = 1; i < prices.length; i++) {
    dp[i]![0] = Math.max(-prices[i]!, dp[i - 1]![0]);
    dp[i]![1] = Math.max(dp[i - 1]![0] + prices[i]!, dp[i - 1]![1]);
  }
  return dp[prices.length - 1]![1];
}
// @lc code=end
