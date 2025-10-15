function insertionSort(arr) {
    const len = arr.length;
    for (let cur = 1; cur < len; cur++) {
        // 存储当前插入元素
        const temp = arr[cur];
        let j = cur;
        // 跳出循环后再赋值temp
        while (--j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

// 二分查找优化
function insertionSort1(arr) {
    const len = arr.length;
    for (let cur = 1; cur < len; cur++) {
        const temp = arr[cur];
        let left = 0;
        let right = cur - 1;
        let mid;
        while (left <= right) {
            mid = left + right >> 1;
            if (arr[mid] > temp) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // cur插在left左侧
        // 边界条件不清楚时举例判断
        for (let i = cur - 1; i > left - 1; i--) {
            arr[i + 1] = arr[i];
        }
        arr[left] = temp;
    }
    return arr;
}


const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort1(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]