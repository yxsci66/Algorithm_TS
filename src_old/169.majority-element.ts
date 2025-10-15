/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (63.92%)
 * Likes:    18510
 * Dislikes: 576
 * Total Accepted:    2.6M
 * Total Submissions: 4M
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

// @lc code=start
export function majorityElement(nums: number[]): number {
  let candidate: number;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate! ? 1 : -1;
  }
  return candidate!;
}
// @lc code=end
