import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { firstMissingPositive } from "../src/41.first-missing-positive";

describe("testUnit", () => {
  it("NO.41", () => {
    const testUnits: Array<TestUnitType<typeof firstMissingPositive>> = [
      {
        input: [[3, 4, -1, 1]],
        output: 2,
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(firstMissingPositive(...input)).to.equal(output);
    });
  });
});
