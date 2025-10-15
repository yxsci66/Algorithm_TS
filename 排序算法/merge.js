// 分治
function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }

    const mid = len >> 1;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    let param = merge(mergeSort(left), mergeSort(right));
    
    param.unshift(0, arr.length);
    arr.splice.apply(arr, param);
    return arr;
}
// 新建内存按序放入
function merge(left, right) {
    let result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(mergeSort(arr));