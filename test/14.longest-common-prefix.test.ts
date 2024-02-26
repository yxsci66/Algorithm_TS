import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { longestCommonPrefix } from "../src/14.longest-common-prefix";

describe("testUnit", () => {
  it("NO.14", () => {
    const testUnits: Array<TestUnitType<typeof longestCommonPrefix>> = [
      {
        input: [["asd", "aa", "as"]],
        output: "a",
      },
      {
        input: [["flower", "flow", "flight"]],
        output: "fl",
      },
      {
        input: [["a"]],
        output: "a",
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(longestCommonPrefix(...input)).to.deep.equal(output);
    });
  });
});
