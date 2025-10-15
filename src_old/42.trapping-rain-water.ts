/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (60.85%)
 * Likes:    30789
 * Dislikes: 468
 * Total Accepted:    1.9M
 * Total Submissions: 3.2M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it can trap after raining.
 *
 *
 * Example 1:
 *
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array
 * [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue
 * section) are being trapped.
 *
 *
 * Example 2:
 *
 *
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 *
 *
 *
 * Constraints:
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lc code=start
function trap(height: number[]): number {
  const stack = [] as number[];
  let resVal = 0;
  for (let i = 0; i < height.length - 1; i++) {
    stack.push(i);
    let top = i;
    if (height[top] === height[i + 1]) {
      stack.pop();
    } else if (height[top]! < height[i + 1]!) {
      while (stack.length > 0 && height[top]! < height[i + 1]!) {
        const temp = stack.pop()!;
        if (stack.length > 0) {
          top = stack[stack.length - 1]!;
          resVal +=
            (Math.min(height[i + 1]!, height[top]!) - height[temp]!) *
            (i - top);
        }
      }
    }
  }
  return resVal;
}
// @lc code=end
