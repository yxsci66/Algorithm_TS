import { expect } from "chai";
import { ListNode, TestUnitType } from "../data_structure/module";
import { removeNthFromEnd } from "../src/19.remove-nth-node-from-end-of-list";

describe("testUnit", () => {
  it("should return", () => {
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
