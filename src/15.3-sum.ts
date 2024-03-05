/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (33.99%)
 * Likes:    29981
 * Dislikes: 2750
 * Total Accepted:    3.3M
 * Total Submissions: 9.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
export function threeSum(nums: number[], targetSum: number = 0): number[][] {
  if (nums.length < 3) return [];

  nums = nums.sort((a, b) => a - b);
  const triplets: number[][] = [];
  for (let cur = 0; cur < nums.length - 2; cur++) {
    // 去重
    while (nums[cur] === nums[cur - 1]) cur++;
    let [left, right] = [cur + 1, nums.length - 1];
    while (left < right) {
      const [o, t, s] = [nums[cur]!, nums[left]!, nums[right]!];
      if (o + t + s === targetSum) {
        triplets.push([o, t, s]);
        // 去重
        while (nums[left] === nums[left + 1]) left++;
        left++;
        right--;
      }
      if (o + t + s > targetSum) {
        right--;
      }
      if (o + t + s < targetSum) {
        left++;
      }
    }
  }
  return triplets;
}
// @lc code=end
