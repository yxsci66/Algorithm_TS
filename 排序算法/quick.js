// 双指针快排
function quickSort(arr, left, right) {
    if (left < right) {
        // 取最后一个为基准
        const temp = arr[right];
        let i = left - 1;
        for (let j = left; j <= right; j++) {
            // 从前往后，快慢指针
            if (arr[j] <= temp) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        // arr[i]==temp
        quickSort(arr, left, i - 1);
        quickSort(arr, i + 1, right);
    }
    return arr;
}
/* 
// 新建内存快排
function quickSort1(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivotIndex = arr.length >> 1;
    const pivot = arr.splice(pivotIndex, 1);
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort1(left).concat(pivot, quickSort1(right));
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr, 0, arr.length - 1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(quickSort1(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] */


