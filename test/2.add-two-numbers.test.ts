import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generateListNodeFromArr } from "../data_structure/utils";
import { addTwoNumbers } from "../src/2.add-two-numbers";

describe("testUnit", () => {
  it("should return", () => {
    const testUnits: Array<TestUnitType<typeof addTwoNumbers>> = [
      {
        input: [
          [2, 4, 3],
          [5, 6, 4],
        ].map(generateListNodeFromArr) as any,
        output: generateListNodeFromArr([7, 0, 8]),
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(addTwoNumbers(...input)).to.deep.equal(output);
    });
  });
});
