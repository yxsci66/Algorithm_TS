import { expect } from "chai";
import { TestUnitType } from "../data_structure/module";
import { jump } from "../src_old_2507/45.jump-game-ii";

describe("test", () => {
  it("NO.45", () => {
    const testUnits: Array<TestUnitType<typeof jump>> = [
      {
        input: [[2, 3, 1, 1, 4]],
        output: 2,
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(jump(...input)).to.deep.eq(output);
    });
  });
});
