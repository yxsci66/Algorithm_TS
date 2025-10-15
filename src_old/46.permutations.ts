/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (78.08%)
 * Likes:    18666
 * Dislikes: 318
 * Total Accepted:    2M
 * Total Submissions: 2.6M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 *
 *
 */

// @lc code=start
export function permute(nums: number[]): number[][] {
  const retArr = [] as number[][];
  const n = nums.length;
  const used = Array(n).fill(false);
  const path = [] as number[];
  const backtrack = () => {
    if (path.length === n) {
      retArr.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]!);
      backtrack();
      used[i] = false;
      path.pop();
    }
  };
  backtrack();
  return retArr;
}
// @lc code=end
