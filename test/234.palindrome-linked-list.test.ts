import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generateListNodeFromArr } from "../data_structure/utils";
import { isPalindrome } from "../src_old_2507/234.palindrome-linked-list";

describe("testUnit", () => {
  it("NO.234", () => {
    const testUnits: Array<TestUnitType<typeof isPalindrome>> = [
      {
        input: [generateListNodeFromArr([1, 2, 1])],
        output: true,
      },
      {
        input: [generateListNodeFromArr([1, 2, 3, 1])],
        output: false,
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(isPalindrome(...input)).to.deep.equal(output);
    });
  });
});
