import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generateListNodeFromArr } from "../data_structure/utils";
import { mergeTwoLists } from "../src/21.merge-two-sorted-lists";

describe("testUnit", () => {
  it("should return", () => {
    const testUnits: Array<TestUnitType<typeof mergeTwoLists>> = [
      {
        input: [
          [2, 4, 6],
          [1, 3, 5],
        ].map(generateListNodeFromArr) as any,
        output: generateListNodeFromArr([1, 2, 3, 4, 5, 6]),
      },
      {
        input: [
          [2, 6, 8],
          [3, 5, 7],
        ].map(generateListNodeFromArr) as any,
        output: generateListNodeFromArr([2, 3, 5, 6, 7, 8]),
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(mergeTwoLists(...input)).to.deep.equal(output);
    });
  });
});
