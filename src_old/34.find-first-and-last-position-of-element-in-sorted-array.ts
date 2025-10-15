/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (43.79%)
 * Likes:    19997
 * Dislikes: 489
 * Total Accepted:    1.9M
 * Total Submissions: 4.4M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in non-decreasing order, find the
 * starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 *
 * Constraints:
 *
 *
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums is a non-decreasing array.
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
export function searchRange(nums: number[], target: number): number[] {
  function searchFirst(nums: number[], target: number) {
    let [f, l] = [0, nums.length - 1];
    let left = -1;
    let mid: number;
    while (f <= l) {
      mid = (f + l) >> 1;
      if (nums[mid]! < target) {
        f = mid + 1;
      } else if (nums[mid]! > target) {
        l = mid - 1;
      } else {
        left = mid;
        l = mid - 1;
      }
    }
    return left;
  }
  function searchLast(nums: number[], target: number) {
    let [f, l] = [0, nums.length - 1];
    let right = -1;
    let mid: number;
    while (f <= l) {
      mid = (f + l) >> 1;
      if (nums[mid]! < target) {
        f = mid + 1;
      } else if (nums[mid]! > target) {
        l = mid - 1;
      } else {
        right = mid;
        f = mid + 1;
      }
    }
    return right;
  }
  return [searchFirst(nums, target), searchLast(nums, target)];
}
// @lc code=end
