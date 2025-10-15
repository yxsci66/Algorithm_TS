/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode.cn/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.34%)
 * Likes:    3126
 * Dislikes: 0
 * Total Accepted:    852.2K
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 *
 * 返回 滑动窗口中的最大值 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1], k = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 *
 *
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  // 双端队列
  const deque = [] as number[];
  const ret = [] as number[];
  for (let i = 0; i < nums.length; i++) {
    // 移除出窗口的元素
    if(deque.length > 0 && deque[0]! <= i - k) {
      deque.shift();
    }
    // 移除小于当前元素的尾部元素
    while(deque.length > 0 && nums[deque[deque.length - 1]!]! < nums[i]!) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      ret.push(nums[deque[0]!]!);
    }
  }
  return ret;
}
// @lc code=end
