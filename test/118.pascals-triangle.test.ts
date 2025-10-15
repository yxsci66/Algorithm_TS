import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generate } from "../src_old_2507/118.pascals-triangle";

describe("testUnit", () => {
  it("NO.148", () => {
    const testUnits: Array<TestUnitType<typeof generate>> = [
      {
        input: [5],
        output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(generate(...input)).to.deep.equal(output);
    });
  });
});
