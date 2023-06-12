# 1381. Design a Stack With Increment Operation

## 思路

1. pop方法的下边界，length === 0
2. push方法的上边界，length === maxSize
3. increment方法的遍历筛选条件：序号小于第一个入参的进行值的累加

## 代码

```typescript
class CustomStack {
  private arr: number[] = [];
  private maxSize: number;
  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.arr.length < this.maxSize) {
      this.arr.push(x);
    }
  }

  pop(): number {
    if (this.arr.length > 0) {
      return this.arr.pop()!;
    }
    return -1;
  }

  increment(k: number, val: number): void {
    this.arr.forEach((_val, index) => {
      if (index < k) {
        this.arr[index] = val + _val;
      }
    });
  }
}
```

## 复杂度

时间复杂度：O(N)
空间复杂度：O(N)
