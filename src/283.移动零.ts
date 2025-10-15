/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 *
 * https://leetcode.cn/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.93%)
 * Likes:    2576
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 2.7M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [0]
 * 输出: [0]
 *
 *
 *
 * 提示:
 *
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：你能尽量减少完成的操作次数吗？
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// function moveZeroes(nums: number[]): void {
//   const leng = nums.length;
//   let i = 0;
//   for (i; ; ) {
//     if (i === nums.length) {
//       break;
//     }
//     if (nums[i] === 0) {
//       nums.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   nums.push(...Array.from({ length: leng - i }).map(() => 0));
// }
function moveZeroes(nums: number[]): void {
  let wp = 0;
  for (let rp = 0; rp < nums.length; rp++) {
    const val = nums[rp]!;
    nums[rp] = 0;
    if (val !== 0) {
      nums[wp] = val;
      wp++;
    }
  }
}
// @lc code=end
