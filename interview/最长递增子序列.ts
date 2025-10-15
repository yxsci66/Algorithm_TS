function lengthOfLIS(nums: number[]): number[] {
  const n = nums.length;
  const dp: number[] = new Array(n).fill(1);
  const prev: number[] = new Array(n).fill(-1);

  let maxLength = 1;
  let endIndex = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i]! > nums[j]! && dp[i]! < dp[j]! + 1) {
        dp[i] = dp[j]! + 1;
        prev[i] = j;
      }
    }
    if (dp[i]! > maxLength) {
      maxLength = dp[i]!;
      endIndex = i;
    }
  }

  const lis: number[] = [];
  while (endIndex !== -1) {
    lis.push(nums[endIndex]!);
    endIndex = prev[endIndex]!;
  }

  return lis.reverse();
}

console.log(lengthOfLIS([1, 2, 1, 3, 1, 4, 5])); // [2, 3, 4, 5]
