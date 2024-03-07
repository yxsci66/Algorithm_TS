// 请实现一个myPromise，模拟Promise.allSettled的功能，接受一个Promise数组arr，同时额外接受一个limit，表示最大并行数，最多同时执行limit个Promise，先执行完的先返回，然后添加新的Promise继续运行，直到所有的Promise执行结束，最终按arr的顺序返回fulfill和reject的结果数组
export async function promiseAllSettledLimit(
  arr: Array<Promise<any>>,
  limit: number
): Promise<Array<any>> {
  const results = new Array(arr.length); // 存储结果的数组
  let currentIndex = 0; // 当前处理的 Promise 索引
  let running = 0; // 当前正在执行的 Promise 数量

  return new Promise((resolve) => {
    // 递归函数，用于调度 Promise 的执行
    function runNext() {
      if (currentIndex >= arr.length) {
        // 所有 Promise 执行完毕，返回结果数组
        resolve(results);
        return;
      }

      const currentPromise = arr[currentIndex]!;
      const currentPromiseIndex = currentIndex;

      currentIndex++;
      running++;

      // 执行当前 Promise
      currentPromise
        .then((value: any) => {
          // Promise 完成，存储结果到结果数组
          results[currentPromiseIndex] = { status: "fulfilled", value };
        })
        .catch((reason: any) => {
          // Promise 失败，存储结果到结果数组
          results[currentPromiseIndex] = { status: "rejected", reason };
        })
        .finally(() => {
          running--;
          // 继续调度下一个 Promise 的执行
          runNext();
        });

      // 如果正在执行的 Promise 数量小于并发限制数，继续调度下一个 Promise 的执行
      if (running < limit) {
        runNext();
      }
    }

    // 开始调度 Promise 的执行
    runNext();
  });
}
