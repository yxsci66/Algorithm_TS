# 989

## 前置知识

数组

## 思路

数组长度过大时会超出计算精度，只能将第二个参数也转成数组。

## 代码(Typescript)

```typescript
function addToArrayForm(num: number[], k: number): number[] {
  const kNumArr: number[] = [];
  while (k > 0) {
    const n = k % 10;
    k = Math.floor(k / 10);
    kNumArr.push(n);
  }
  num.reverse();
  const res = [] as number[];
  let temp = 0;
  for (let i = 0; i < Math.max(kNumArr.length, num.length); i++) {
    let [l, r] = [0, 0];
    if (i < kNumArr.length) {
      r = kNumArr[i];
    }
    if (i < num.length) {
      l = num[i];
    }
    const _res = l + r + temp;
    res.push(_res % 10);
    temp = Math.floor(_res / 10);
  }
  if (temp) {
    res.push(temp);
  }
  return res.reverse();
}
```

## 复杂度

时间复杂度：O(n)
空间复杂度：O(n)
