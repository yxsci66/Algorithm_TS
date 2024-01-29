export type TestUnitType<T extends (...args: any) => any> = {
  input: Parameters<T>;
  output: ReturnType<T>;
};
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
