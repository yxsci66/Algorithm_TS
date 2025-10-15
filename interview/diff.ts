function diff(nodes: string[], after: string[]): string[] {
  const dp: number[][] = Array(nodes.length + 1)
    .fill(0)
    .map(() => Array(after.length + 1).fill(0));

  for (let i = 1; i <= nodes.length; i++) {
    for (let j = 1; j <= after.length; j++) {
      if (nodes[i - 1] === after[j - 1]) {
        dp[i]![j] = dp[i - 1]![j - 1]!;
      } else {
        dp[i]![j] = Math.min(
          dp[i - 1]![j - 1]! + 1,
          dp[i - 1]![j]! + 1,
          dp[i]![j - 1]! + 1
        );
      }
    }
  }

  const operations: string[] = [];
  let i = nodes.length;
  let j = after.length;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && nodes[i - 1] === after[j - 1]) {
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i]![j] === dp[i]![j - 1]! + 1)) {
      operations.push(`新增 ${after[j - 1]}`);
      j--;
    } else if (i > 0 && (j === 0 || dp[i]![j] === dp[i - 1]![j]! + 1)) {
      operations.push(`删除 ${nodes[i - 1]}`);
      i--;
    } else {
      operations.push(`替换 ${nodes[i - 1]} 为 ${after[j - 1]}`);
      i--;
      j--;
    }
  }

  return operations;
}

const nodes = ["A", "B", "C", "D"];
const after_words = ["B", "A", "E", "D", "C"];
const operations = diff(nodes, after_words);
console.log(operations);
