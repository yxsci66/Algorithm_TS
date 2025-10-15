/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (59.63%)
 * Likes:    18011
 * Dislikes: 960
 * Total Accepted:    1.9M
 * Total Submissions: 3.2M
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the answer in
 * any order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 *
 *
 * Example 1:
 *
 *
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 *
 * Example 2:
 *
 *
 * Input: digits = ""
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 *
 *
 */

// @lc code=start
const digitMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
function combinationArr(a: string[], b: string[]): string[] {
  const arr = [] as string[];
  for (const itemA of a) {
    for (const itemB of b) {
      arr.push(itemA + itemB);
    }
  }
  return b.length > 0 ? arr : a;
}
export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  const curMapArr = digitMap[digits[0] as any as keyof typeof digitMap];
  return combinationArr(curMapArr, letterCombinations(digits.slice(1)));
}
// @lc code=end
