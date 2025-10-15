function shellSort(arr) {
    const len = arr.length;
    let gap = 1;
    // 动态定义间隔
    while (gap < len / 5) {
        gap = gap * 5 + 1;
    }
    // 分组插入排序
    while (gap > 0) {
        // 插入排序
        for (let cur = gap; cur < len; cur++) {
            // 存储当前插入元素
            const temp = arr[cur];
            let j = cur - gap;
            // 跳出循环后再赋值temp
            while (j >= 0 && temp < arr[j]) {
                arr[j + gap] = arr[j];
                j -= gap;
            }
            arr[j + gap] = temp;
        }
        gap = Math.floor(gap / 5);
    }
    return arr;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

