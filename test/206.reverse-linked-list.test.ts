import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generateListNodeFromArr } from "../data_structure/utils";
import { reverseList } from "../src/206.reverse-linked-list";

describe("testUnit", () => {
  it("should return", () => {
    const testUnits: Array<TestUnitType<typeof reverseList>> = [
      {
        input: [[1, 4, 5]].map(generateListNodeFromArr) as any,
        output: generateListNodeFromArr([5, 4, 1]),
      },
      {
        input: [[1]].map(generateListNodeFromArr) as any,
        output: generateListNodeFromArr([1]),
      },
      {
        input: [[]].map(generateListNodeFromArr) as any,
        output: generateListNodeFromArr([]),
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(reverseList(...input)).to.deep.equal(output);
    });
  });
});
