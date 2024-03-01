/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (73.63%)
 * Likes:    12470
 * Dislikes: 421
 * Total Accepted:    1.6M
 * Total Submissions: 2.1M
 * Testcase Example:  '5'
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= numRows <= 30
 *
 *
 */

// @lc code=start
export function generate(numRows: number): number[][] {
  const arr: number[][] = [[1]];
  for (let i = 1; i < numRows; i++) {
    arr[i] = Array.from({ length: i + 1 }).fill(0) as number[];
    let [left, right] = [0, i] as [number, number];
    while (left <= right) {
      if (left === 0) {
        arr[i]![left] = arr[i - 1]![left]!;
        arr[i]![right] = arr[i - 1]![right - 1]!;
      } else {
        arr[i]![left] = arr[i - 1]![left]! + arr[i - 1]![left - 1]!;
        arr[i]![right] = arr[i - 1]![right - 1]! + arr[i - 1]![right]!;
      }
      left++;
      right--;
    }
  }
  return arr;
}
// @lc code=end
