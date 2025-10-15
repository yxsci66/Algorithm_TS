/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 *
 * https://leetcode.cn/problems/subsets/description/
 *
 * algorithms
 * Medium (82.06%)
 * Likes:    2449
 * Dislikes: 0
 * Total Accepted:    948.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 *
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0]
 * 输出：[[],[0]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * nums 中的所有元素 互不相同
 *
 *
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const ret = [] as number[][];
  function backtrack(path: number[], index: number) {
    if (index > nums.length - 1) {
      ret.push(path);
      return;
    }
    backtrack([...path, nums[index]!], index + 1);
    backtrack(path, index + 1);
  }
  backtrack([], 0);
  return ret;
}
// @lc code=end
