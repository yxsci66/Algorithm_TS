# 821

## 前置知识

数组

## 思路

顺序遍历，反序遍历，取最小距离

## 代码(Typescript)

```typescript
function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const ans = new Array(n).fill(0);
  let prev = -Infinity;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i;
    }
    ans[i] = i - prev;
  }
  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    ans[i] = Math.min(ans[i], prev - i);
  }
  return ans;
}
```

## 复杂度

时间复杂度：O(n)
空间复杂度：O(n)
