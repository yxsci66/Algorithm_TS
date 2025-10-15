function selectionSort(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i; j < len; j++) {
            // 找出无序序列中的最小值
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        // 将最小值前置 
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
