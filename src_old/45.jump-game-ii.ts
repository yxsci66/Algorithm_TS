/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Medium (40.37%)
 * Likes:    14197
 * Dislikes: 543
 * Total Accepted:    1.2M
 * Total Submissions: 2.9M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * You are given a 0-indexed array of integers nums of length n. You are
 * initially positioned at nums[0].
 *
 * Each element nums[i] represents the maximum length of a forward jump from
 * index i. In other words, if you are at nums[i], you can jump to any nums[i +
 * j] where:
 *
 *
 * 0 <= j <= nums[i] and
 * i + j < n
 *
 *
 * Return the minimum number of jumps to reach nums[n - 1]. The test cases are
 * generated such that you can reach nums[n - 1].
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump
 * 1 step from index 0 to 1, then 3 steps to the last index.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 1000
 * It's guaranteed that you can reach nums[n - 1].
 *
 *
 */

// @lc code=start
export function jump(nums: number[]): number {
  const n = nums.length;
  let end = 0;
  let step = 0;
  let maxPos = 0;
  for (let i = 0; i < n - 1; i++) {
    maxPos = Math.max(maxPos, i + nums[i]!);
    if (i === end) {
      end = maxPos;
      step++;
    }
  }
  return step;
}
// @lc code=end
