import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { generateListNodeFromArr } from "../data_structure/utils";
import { removeNthFromEnd } from "../src_old_2507/19.remove-nth-node-from-end-of-list";

describe("testUnit", () => {
  it("NO.19", () => {
    const testUnits: Array<TestUnitType<typeof removeNthFromEnd>> = [
      {
        input: [generateListNodeFromArr([2, 4, 6]), 1],
        output: generateListNodeFromArr([2, 4]),
      },
      {
        input: [generateListNodeFromArr([2, 4, 6]), 2],
        output: generateListNodeFromArr([2, 6]),
      },
      {
        input: [generateListNodeFromArr([2, 4, 6]), 3],
        output: generateListNodeFromArr([4, 6]),
      },
      {
        input: [generateListNodeFromArr([2]), 1],
        output: generateListNodeFromArr([]),
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(removeNthFromEnd(...input)).to.deep.equal(output);
    });
  });
});
