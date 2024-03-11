/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (39.58%)
 * Likes:    17849
 * Dislikes: 4568
 * Total Accepted:    1.3M
 * Total Submissions: 3.2M
 * Testcase Example:  '[1,2,3]'
 *
 * A permutation of an array of integers is an arrangement of its members into
 * a sequence or linear order.
 *
 *
 * For example, for arr = [1,2,3], the following are all the permutations of
 * arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
 *
 *
 * The next permutation of an array of integers is the next lexicographically
 * greater permutation of its integer. More formally, if all the permutations
 * of the array are sorted in one container according to their lexicographical
 * order, then the next permutation of that array is the permutation that
 * follows it in the sorted container. If such arrangement is not possible, the
 * array must be rearranged as the lowest possible order (i.e., sorted in
 * ascending order).
 *
 *
 * For example, the next permutation of arr = [1,2,3] is [1,3,2].
 * Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
 * While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does
 * not have a lexicographical larger rearrangement.
 *
 *
 * Given an array of integers nums, find the next permutation of nums.
 *
 * The replacement must be in place and use only constant extra memory.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3]
 * Output: [1,3,2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,1]
 * Output: [1,2,3]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,1,5]
 * Output: [1,5,1]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums: number[]): void {
  let lastIndex = -1;
  let minIndex = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i]! < nums[i + 1]!) {
      lastIndex = i;
    }
    if (lastIndex !== -1 && nums[i + 1]! > nums[lastIndex]!) {
      minIndex = i + 1;
    }
  }
  if (lastIndex === -1) {
    nums.reverse();
  } else {
    [nums[lastIndex], nums[minIndex]] = [nums[minIndex]!, nums[lastIndex]!];
    nums = nums.splice(
      lastIndex + 1,
      nums.length - lastIndex - 1,
      ...nums.slice(lastIndex + 1).sort((a, b) => a - b)
    );
  }
}
// @lc code=end
