import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { combinationSum } from "../src_old_2507/39.combination-sum";

describe("twoSum", () => {
  it("NO.39", () => {
    const testUnits: Array<TestUnitType<typeof combinationSum>> = [
      {
        input: [[2, 3, 5], 8],
        output: [
          [2, 2, 2, 2],
          [2, 3, 3],
          [3, 5],
        ],
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(combinationSum(...input).map((e) => e.sort())).to.deep.equal(
        output.map((e) => e.sort())
      );
    });
  });
});
