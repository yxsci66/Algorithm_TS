import { ListNode } from "./module";

/**
 * Generates a ListNode from the given array.
 *
 * @param {number[]} arr - The array to be converted into a ListNode.
 * @return {ListNode} The ListNode generated from the input array.
 */
export function generateListNodeFromArr(arr: number[]): ListNode {
  const Node = new ListNode();
  arr
    .map((e) => new ListNode(e))
    .reduce((pre, cur) => {
      pre.next = cur;
      return pre.next;
    }, Node);
  return Node.next!;
}
