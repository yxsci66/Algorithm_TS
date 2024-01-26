import { expect } from "chai";
import { twoSum } from "../src/1.two-sum";

describe("twoSum", () => {
  it("should return the indices of the two numbers that add up to the target", () => {
    expect(twoSum([1, 2], 3)).to.deep.equal([0, 2]);
  });
});
