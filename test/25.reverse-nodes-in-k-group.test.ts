import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generateListNodeFromArr } from "../data_structure/utils";
import { reverseKGroup } from "../src/25.reverse-nodes-in-k-group";

describe("testUnit", () => {
  it("NO.25", () => {
    const testUnits: Array<TestUnitType<typeof reverseKGroup>> = [
      {
        input: [generateListNodeFromArr([1, 4, 5, 6]), 2],
        output: generateListNodeFromArr([4, 1, 6, 5]),
      },
      {
        input: [generateListNodeFromArr([1, 4, 5, 6]), 0],
        output: generateListNodeFromArr([1, 4, 5, 6]),
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(reverseKGroup(...input)).to.deep.equal(output);
    });
  });
});
