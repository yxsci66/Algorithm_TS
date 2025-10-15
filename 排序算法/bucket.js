/**
 * 
 * @param {*} arr 数组
 * @param {*} num 桶的数量
 * @returns 
 */
function bucketSort(arr, num) {
    if (arr.length < 2) {
        return arr;
    }
    const len = arr.length;
    const bucket = [],
        result = [];
    let min, max, space;
    min = max = arr[0];
    // 确定最值
    for (let i = 1; i < len; i++) {
        min = min > arr[i] ? arr[i] : min;
        max = max < arr[i] ? arr[i] : max;
    }
    // 分区
    space = (max - min + 1) / num;
    // 填入桶
    for (let i = 0; i < len; i++) {
        let index = Math.floor((arr[i] - min) / space);
        // 桶不空，插入排序
        if (bucket[index]) {
            let k = bucket[index].length;
            while (--k >= 0 && bucket[index][k] > arr[i]) {
                bucket[index][k + 1] = bucket[index][k];
            }
            bucket[index][k + 1] = arr[i];
        } else {
            // 桶空，初始化
            bucket[index] = [];
            bucket[index].push(arr[i]);
        }
    }
    let n = 0;
    while (n < num) {
        result.push(...bucket[n]);
        n++;
    }
    return result;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bucketSort(arr, 4));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]