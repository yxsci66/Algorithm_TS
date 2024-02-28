/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (45.14%)
 * Likes:    15625
 * Dislikes: 695
 * Total Accepted:    2.7M
 * Total Submissions: 6M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be if
 * it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums contains distinct values sorted in ascending order.
 * -10^4 <= target <= 10^4
 *
 *
 */
/* 
HACK:
1. 左闭右闭区间
  left <= right
2. 左闭右开区间

*/
// @lc code=start
export function searchInsert(nums: number[], target: number): number {
  let [front, end] = [0, nums.length - 1];
  let midIndex: number;
  while (front <= end) {
    midIndex = Math.floor((front + end) / 2);
    if (nums[midIndex]! > target) {
      end = midIndex - 1;
    } else if (nums[midIndex]! < target) {
      front = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return front;
}
// @lc code=end
