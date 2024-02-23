import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generateListNodeFromArr } from "../data_structure/utils";
import { sortList } from "../src/148.sort-list";

describe("testUnit", () => {
  it("NO.148", () => {
    const testUnits: Array<TestUnitType<typeof sortList>> = [
      {
        input: [generateListNodeFromArr([4, 1, 6, 5])],
        output: generateListNodeFromArr([1, 4, 5, 6]),
      },
      {
        input: [generateListNodeFromArr([4, 1, 6, 5, 4])],
        output: generateListNodeFromArr([1, 4, 4, 5, 6]),
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(sortList(...input)).to.deep.equal(output);
    });
  });
});
