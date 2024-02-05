import { expect } from "chai";
import { ListNode, TestUnitType } from "../data_structure/module";
import { swapPairs } from "../src/24.swap-nodes-in-pairs";

describe("testUnit", () => {
  it("should return", () => {
    const testUnits: Array<TestUnitType<typeof swapPairs>> = [
      {
        input: [[1, 4, 5]].map(generateListNodeFromArr) as any,
        output: generateListNodeFromArr([4, 1, 5]),
      },
      {
        input: [[1, 4, 8, 7, 5, 9]].map(generateListNodeFromArr) as any,
        output: generateListNodeFromArr([4, 1, 7, 8, 9, 5]),
      },
    ];
    testUnits.forEach(({ input, output }) => {
      expect(swapPairs(...input)).to.deep.equal(output);
    });
  });
});
function generateListNodeFromArr(arr: number[]): ListNode {
  const Node = new ListNode();
  arr
    .map((e) => new ListNode(e))
    .reduce((pre, cur) => {
      pre.next = cur;
      return pre.next;
    }, Node);
  return Node.next!;
}
