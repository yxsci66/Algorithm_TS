/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (39.52%)
 * Likes:    27608
 * Dislikes: 3060
 * Total Accepted:    2.5M
 * Total Submissions: 6.2M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return
 * the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 *
 *
 * Constraints:
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 *
 */

// @lc code=start
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  function mergeList(nums1: number[], nums2: number[]): number[] {
    if (nums1.length === 0) {
      return nums2;
    }
    if (nums2.length === 0) {
      return nums1;
    }
    if (nums1[0]! > nums2[0]!) {
      return [nums2[0]!, ...mergeList(nums1, nums2.slice(1))];
    } else {
      return [nums1[0]!, ...mergeList(nums1.slice(1), nums2)];
    }
  }
  const arr = mergeList(nums1, nums2);
  let left: number;
  let right: number;
  if (arr.length % 2 === 0) {
    right = arr.length / 2;
    left = right - 1;
  } else {
    right = left = Math.floor(arr.length / 2);
  }
  return (arr[left]! + arr[right]!) / 2;
}
// @lc code=end
