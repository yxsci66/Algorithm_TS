import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generateListNodeFromArr } from "../data_structure/utils";
import { mergeKLists } from "../src/23.merge-k-sorted-lists";

describe("testUnit", () => {
  it("should return", () => {
    const testUnits: Array<TestUnitType<typeof mergeKLists>> = [
      {
        input: [
          [
            [2, 4, 6],
            [1, 3, 5],
          ].map(generateListNodeFromArr),
        ],
        output: generateListNodeFromArr([1, 2, 3, 4, 5, 6]),
      },
      {
        input: [
          [
            [1, 4, 5],
            [1, 3, 4],
            [2, 6],
          ].map(generateListNodeFromArr),
        ],
        output: generateListNodeFromArr([1, 1, 2, 3, 4, 4, 5, 6]),
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(mergeKLists(...input)).to.deep.equal(output);
    });
  });
});
