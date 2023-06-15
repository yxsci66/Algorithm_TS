# 768

## 前置知识

双指针

## 思路

从左到右依次遍历，同时满足以下条件即可分块：

1. 双指针的范围内最大值，不大于下一个值
2. 双指针的范围内最大值，不大于后续范围内的最小值

## 代码

```typescript
function maxChunksToSorted(arr: number[]): number {
  let count = 1,
    i = 0,
    j = 1,
    max = arr[i];
  while (j < arr.length) {
    const rMin = Math.min(...arr.slice(j));
    if (max > arr[j] || max > rMin) {
      max = Math.max(max, arr[j]);
      j++;
    } else {
      i = j++;
      max = arr[i];
      count++;
    }
  }
  return count;
}
```

## 复杂度

时间复杂度：O(n^2)
空间复杂度：O(1)
