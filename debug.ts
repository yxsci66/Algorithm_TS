function two(nums: number[], target: number): number[] {
  let theIndex, i;
  theIndex = i = 0;
  for (; i < nums.length; i++) {
    nums.pop();
    const subResult = target - nums[i]!;
    theIndex = nums.indexOf(subResult);
  }
  return [i, theIndex];
}
two([1, 2], 3);
