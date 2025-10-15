import fs from "fs";
// setImmediate 设计在 poll 阶段完成时执行，setTimeout 设计在 poll 阶段为空闲时，且设定时间到达后执行，但它在 timer 阶段执行
Promise.resolve().then(() => {
  console.log("3.5");
  setTimeout(() => {
    console.log("8");
  }, 0);
  setImmediate(() => {
    console.log("6");
  });
});
fs.readFile("example.txt", () => {
  console.log("4.6");
  setTimeout(() => {
    console.log("9");
  }, 0);
  setImmediate(() => {
    console.log("7");
  });
});
// console.log("1");
setImmediate(() => {
  console.log("5");
});
setTimeout(() => {
  console.log("4");
  process.nextTick(() => {
    console.log("4.5");
  });
}, 0);

// process.nextTick(() => {
//   console.log("3");
// });
// new Promise((res) => {
//   console.log("1.5");
//   res("");
// });
// console.log("2");
