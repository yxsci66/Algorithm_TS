import { expect } from "chai";
import { twoSum } from "../src/1.two-sum";
import { TestUnitType } from "../data_structure/module";

describe("twoSum", () => {
  it("should return the indices of the two numbers that add up to the target", () => {
    const testUnits: Array<TestUnitType<typeof twoSum>> = [
      {
        input: [[1, 2, 3], 3],
        output: [0, 1],
      },
      {
        input: [[1, 7, 8], 9],
        output: [0, 2],
      },
      {
        input: [[1, 2, 3], 5],
        output: [1, 2],
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(twoSum(...input).sort()).to.deep.equal(output.sort());
    });
  });
});
