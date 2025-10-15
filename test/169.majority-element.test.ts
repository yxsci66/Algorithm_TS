import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { majorityElement } from "../src_old_2507/169.majority-element";

describe("testUnit", () => {
  it("NO.169", () => {
    const testUnits: Array<TestUnitType<typeof majorityElement>> = [
      {
        input: [[1, 1, 2, 1, 3, 4]],
        output: 1,
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(majorityElement(...input)).to.deep.equal(output);
    });
  });
});
