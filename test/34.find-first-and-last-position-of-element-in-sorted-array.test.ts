import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { searchRange } from "../src_old_2507/34.find-first-and-last-position-of-element-in-sorted-array";

describe("twoSum", () => {
  it("NO.34", () => {
    const testUnits: Array<TestUnitType<typeof searchRange>> = [
      {
        input: [[5, 7, 7, 8, 8, 10], 8],
        output: [3, 4],
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(searchRange(...input)).to.deep.equal(output);
    });
  });
});
