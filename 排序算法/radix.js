/**
 * 
 * @param {*} arr 待排序数组
 * @param {*} maxDigit 最大位数
 */
 function radixSort(arr, maxDigit) {
    let mod = 10;
    let dev = 1;
    // 初始化counter,注意fill与map的区别
    const counter = new Array(10).fill().map(e => new Array());
    const len = arr.length;
    // 按位数遍历
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        // arr存入基数数组
        for (let j = 0; j < len; j++) {
            const num = Math.floor(arr[j] % mod / dev);
            counter[num].push(arr[j]);
        }
        // 按基数从小到大取出
        let cur = 0;
        for (let j = 0; j < counter.length; j++) {
            while (counter[j].length) {
                arr[cur++] = counter[j].shift();
            }
        }
    }
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(radixSort(arr, 2)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]