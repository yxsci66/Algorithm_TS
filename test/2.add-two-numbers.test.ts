import { expect } from "chai";
import { ListNode, TestUnitType } from "../data_structure/module";
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
