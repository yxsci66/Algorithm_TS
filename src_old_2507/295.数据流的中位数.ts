/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * [295] 数据流的中位数
 *
 * https://leetcode.cn/problems/find-median-from-data-stream/description/
 *
 * algorithms
 * Hard (56.09%)
 * Likes:    1123
 * Dislikes: 0
 * Total Accepted:    215.7K
 * Total Submissions: 379.1K
 * Testcase Example:  '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n' +
  '[[],[1],[2],[],[3],[]]'
 *
 * 中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。
 * 
 * 
 * 例如 arr = [2,3,4] 的中位数是 3 。
 * 例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。
 * 
 * 
 * 实现 MedianFinder 类:
 * 
 * 
 * 
 * MedianFinder() 初始化 MedianFinder 对象。
 * 
 * 
 * void addNum(int num) 将数据流中的整数 num 添加到数据结构中。
 * 
 * 
 * double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10^-5 以内的答案将被接受。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入
 * ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
 * [[], [1], [2], [], [3], []]
 * 输出
 * [null, null, null, 1.5, null, 2.0]
 * 
 * 解释
 * MedianFinder medianFinder = new MedianFinder();
 * medianFinder.addNum(1);    // arr = [1]
 * medianFinder.addNum(2);    // arr = [1, 2]
 * medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)
 * medianFinder.addNum(3);    // arr[1, 2, 3]
 * medianFinder.findMedian(); // return 2.0
 * 
 * 提示:
 * 
 * 
 * -10^5 <= num <= 10^5
 * 在调用 findMedian 之前，数据结构中至少有一个元素
 * 最多 5 * 10^4 次调用 addNum 和 findMedian
 * 
 * 
 */

// @lc code=start
class MedianFinder {
    private maxHeap: number[] = [];
    private minHeap: number[] = [];
  
    addNum(num: number): void {
      if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
        this.maxHeap.push(num);
        this.heapifyUp(this.maxHeap, this.maxHeap.length - 1);
      } else {
        this.minHeap.push(num);
        this.heapifyUp(this.minHeap, this.minHeap.length - 1);
      }
  
      if (this.maxHeap.length > this.minHeap.length + 1) {
        this.minHeap.push(this.heapifyDown(this.maxHeap, 0));
      } else if (this.minHeap.length > this.maxHeap.length) {
        this.maxHeap.push(this.heapifyDown(this.minHeap, 0));
      }
    }
  
    findMedian(): number {
      if (this.maxHeap.length === this.minHeap.length) {
        return (this.maxHeap[0] + this.minHeap[0]) / 2;
      } else {
        return this.maxHeap[0];
      }
    }
  
    private heapifyUp(heap: number[], index: number): void {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[parentIndex] >= heap[index]) break;
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    private heapifyDown(heap: number[], index: number): number {
      const length = heap.length;
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;
        if (leftChildIndex < length && heap[leftChildIndex] < heap[smallest]) {
          smallest = leftChildIndex;
        }
        if (rightChildIndex < length && heap[rightChildIndex] < heap[smallest]) {
          smallest = rightChildIndex;
        }
        if (smallest === index) break;
        [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
        index = smallest;
      }
      return heap.shift();
    }
  }

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
