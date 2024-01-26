export type TestUnitType<T extends (...args: any) => any> = {
  input: Parameters<T>;
  output: ReturnType<T>;
};
