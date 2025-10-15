import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { searchInsert } from "../src_old_2507/35.search-insert-position";

describe("testUnit", () => {
  it("NO.35", () => {
    const testUnits: Array<TestUnitType<typeof searchInsert>> = [
      {
        input: [[1, 3, 5, 6], 5],
        output: 2,
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(searchInsert(...input)).to.deep.equal(output);
    });
  });
});
