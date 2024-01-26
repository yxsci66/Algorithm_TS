/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (51.61%)
 * Likes:    54552
 * Dislikes: 1838
 * Total Accepted:    12M
 * Total Submissions: 23.3M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 *
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n^2) time
 * complexity?
 */

// @lc code=start
export function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const subNum = target - nums[i]!;
    if (numMap.has(subNum)) {
      return [i, numMap.get(subNum)];
    }
    numMap.set(nums[i]!, i);
  }
  return [-1, -1];
}
// export function twoSum(nums: number[], target: number): number[] {
//   let arr = Array.from({ length: 2 }) as number[];
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (nums[i]! + nums[j]! === target) arr = [i, j];
//     }
//   }
//   return arr;
// }
// @lc code=end
