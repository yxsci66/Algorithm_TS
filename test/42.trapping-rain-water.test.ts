import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { trap } from "../src_old_2507/42.trapping-rain-water";

describe("test", () => {
  it("NO.42", () => {
    const testUnits: Array<TestUnitType<typeof trap>> = [
      {
        input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
        output: 6,
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(trap(...input)).to.deep.eq(output);
    });
  });
});
