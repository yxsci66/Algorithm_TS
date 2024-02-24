import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { sortColors } from "../src/75.sort-colors";

describe("twoSum", () => {
  it("NO.75", () => {
    const testUnits: Array<TestUnitType<typeof sortColors>> = [
      {
        input: [[2, 0, 2, 1, 1, 0]],
        output: [0, 0, 1, 1, 2, 2],
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(sortColors(...input)).to.deep.equal(output.sort());
    });
  });
});
