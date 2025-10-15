// // function getMinlength(str:string){
// //   let s = str;
// //   while(s.length > 0 && (s.includes('01') || s.includes('10'))){
// //     s = s.replace(/01/,'');
// //     s = s.replace(/10/,'');
// //   }
// //   return s.length;
// // }

// // console.log(getMinlength('1100'));
// // console.log(getMinlength('1011011'));
// // console.log(getMinlength('111110'));
// // console.log(getMinlength('100101'));

// function getPubRoot(k: number, a: number, b: number, c: number): number {
//   // 所有的节点都可以构造成2^n(+-)2^n-1(+-)......(+-)1的形式,使用0表示-，1表示+
//   const [sa, sb, sc] = [a, b, c].map((e) => getStr(e, k));
//   let commonStr = "1";
//   for (let i = 1; i < k; i++) {
//     const same = [sa, sb, sc].every((e) => e[i] === sa[i]);
//     if (same) {
//       commonStr += sa[i];
//     } else {
//       break;
//     }
//   }
//   let res = 0;
//   for (let index = 0; index < commonStr.length; index++) {
//     const i = commonStr[index];
//     if (i === "1") {
//       res = res + (1 << (k - index - 1));
//     } else {
//       res = res - (1 << (k - index - 1));
//     }
//   }
//   return res;
// }
// function getStr(num: number, depth: number) {
//   let path = "1";
//   let count = 0;
//   let cur = 1 << (depth - 1);
//   while (cur !== num) {
//     count++;
//     if (cur > num) {
//       cur -= 1 << (depth - 1 - count);
//       path += "0";
//     } else {
//       cur += 1 << (depth - 1 - count);
//       path += "1";
//     }
//   }
//   return path;
// }
// // console.log(getPubRoot(4, 10, 15, 13));
// // console.log(getPubRoot(4, 3, 1, 12));
// // console.log(getPubRoot(5, 31, 29, 27));
// console.log(getPubRoot(5, 1, 2, 4));
// // console.log(getPubRoot(5, 23, 21, 22));
// // console.log(getStr(8, 4));
// // console.log(getStr(12, 4));
// // console.log(getStr(4, 4));
// // console.log(getStr(1, 4));
// // console.log(getStr(15, 4));
function intToLetter(n: number): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  while (n > 0) {
    const remainder = n % 26;
    const cur = remainder === 0 ? 26 : remainder;
    result = letters[cur - 1] + result;
    n = Math.floor(n / 26);
    if (n === 1 && remainder === 0) {
      n = 0;
    }
  }
  return result;
}
console.log(intToLetter(84));
