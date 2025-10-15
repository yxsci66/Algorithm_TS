/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (60.92%)
 * Likes:    2671
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.1M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 *
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 *
 * 输入: [3,2,3,1,2,4,5,5,6], k = 4
 * 输出: 4
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;
  k = n - k; // 因为我们要找第 k 个最大的元素，所以我们需要找第 (n-k) 个最小的元素

  function quickSelect(left: number, right: number): number {
    if (left === right) {
      return nums[left]!;
    }

    const pivotIndex = partition(left, right);
    if (k === pivotIndex) {
      return nums[k]!;
    } else if (k < pivotIndex) {
      return quickSelect(left, pivotIndex - 1);
    } else {
      return quickSelect(pivotIndex + 1, right);
    }
  }

  function partition(left: number, right: number): number {
    const pivot = nums[right]!;
    let i = left;
    for (let j = left; j < right; j++) {
      if (nums[j]! <= pivot) {
        [nums[i], nums[j]] = [nums[j]!, nums[i]!];
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right]!, nums[i]!];
    return i;
  }

  return quickSelect(0, n - 1);
}

// @lc code=end
