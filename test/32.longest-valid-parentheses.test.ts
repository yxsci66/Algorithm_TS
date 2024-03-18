import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { longestValidParentheses } from "../src/32.longest-valid-parentheses";

describe("testUnit", () => {
  it("NO.32", () => {
    const testUnits: Array<TestUnitType<typeof longestValidParentheses>> = [
      {
        input: [")()())"],
        output: 4,
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(longestValidParentheses(...input)).to.equal(output);
    });
  });
});
