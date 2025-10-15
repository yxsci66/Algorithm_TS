# 十大排序算法

## O(n2)

1. [选择排序](./selection.js)

| Name              | Best | Average | Worst | Memory | Stable | Comments |
| ----------------- | ---- | ------- | ----- | ------ | ------ | -------- |
| **Counting sort** | n2   | n2      | n2    | 1      | No     |          |

2. [插入排序](./insertion.js)
| Name              | Best | Average | Worst | Memory | Stable | Comments |
| ----------------- | ---- | ------- | ----- | ------ | ------ | -------- |
| **Counting sort** | n    | n2      | n2    | 1      | Yes    |          |
3. [冒泡排序](./bubble.js)

| Name              | Best | Average | Worst | Memory | Stable | Comments |
| ----------------- | ---- | ------- | ----- | ------ | ------ | -------- |
| **Counting sort** | n    | n2      | n2    | 1      | Yes    |          |
## 

4. [归并排序](./merge.js)

| Name              | Best     | Average  | Worst    | Memory | Stable | Comments |
| ----------------- | -------- | -------- | -------- | ------ | ------ | -------- |
| **Counting sort** | n log(n) | n log(n) | n log(n) | n      | Yes    |          |
5. [希尔排序](./shell.js)

| Name              | Best     | Average | Worst      | Memory | Stable | Comments |
| ----------------- | -------- | ------- | ---------- | ------ | ------ | -------- |
| **Counting sort** | n log(n) |         | n(log(n)2) | 1      | No     |          |
6. [快速排序](./quick.js)

| Name              | Best     | Average  | Worst | Memory | Stable | Comments |
| ----------------- | -------- | -------- | ----- | ------ | ------ | -------- |
| **Counting sort** | n log(n) | n log(n) | n2    | log(n) | No     |          |

7. [堆排序](./heap.js)

   <img src="https://www.runoob.com/wp-content/uploads/2019/03/heapSort.gif">

| Name              | Best     | Average  | Worst    | Memory | Stable | Comments |
| ----------------- | -------- | -------- | -------- | ------ | ------ | -------- |
| **Counting sort** | n log(n) | n log(n) | n log(n) | 1      | Yes    |          |
8. [桶排序](./bucket.js)

| Name              | Best | Average | Worst | Memory | Stable | Comments |
| ----------------- | ---- | ------- | ----- | ------ | ------ | -------- |
| **Counting sort** | n    | n+k     | n2    | n*k    | No     |          |
9. [基数排序](./radix.js)

| Name              | Best | Average | Worst | Memory | Stable | Comments |
| ----------------- | ---- | ------- | ----- | ------ | ------ | -------- |
| **Counting sort** | n*k  | n*k     | n*k   | n*k    | Yes    |          |
10. [计数排序](./counting.js)

| Name              | Best | Average | Worst | Memory | Stable | Comments |
| ----------------- | ---- | ------- | ----- | ------ | ------ | -------- |
| **Counting sort** | n+r  | n+r     | n+r   | n+r    | Yes    |          |

