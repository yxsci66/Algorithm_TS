# 232

## 前置知识

栈

## 思路

ts里通过api实现即可

## 代码(typescript)

```typescript
class MyQueue {
  private arr: any[];
  constructor() {
    this.arr = [];
  }

  push(x: number): void {
    this.arr.push(x);
  }

  pop(): number {
    return this.arr.shift();
  }

  peek(): number {
    return this.arr[0];
  }

  empty(): boolean {
    return this.arr.length === 0;
  }
}
```

## 复杂度

时间复杂度：O(n)
空间复杂度：O(n)
