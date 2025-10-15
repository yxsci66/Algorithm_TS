function heapSort(array, size) {
  //建堆
  let heapSize = size ?? array.length;
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    heapify(array, i, heapSize);
  }

  //堆排序
  for (let j = heapSize - 1; j >= 1; j--) {
    [array[0], array[j]] = [array[j], array[0]];
    heapify(array, 0, --heapSize);
  }

  return array;
}

/**
 *
 * @param  arr 数组
 * @param  x   数组下标
 * @param  len 堆大小
 * @returns
 */
function heapify(arr, x, len) {
  var l = 2 * x + 1,
    r = 2 * x + 2,
    largest = x;
  if (l < len && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < len && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest != x) {
    [arr[x], arr[largest]] = [arr[largest], arr[x]];
    heapify(arr, largest, len);
  }
}
const arr = [91, 60, 96, 13, 35, 65, 46, 65, 10, 30, 20, 31, 77, 81, 22];
console.log(heapSort(arr)); //[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
