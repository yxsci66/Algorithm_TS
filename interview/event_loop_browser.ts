function animationFrame() {
  console.log("3.6_animationFrame");
}
// 同步任务（当前循环的宏任务），微任务，requestAnimationFrame，宏任务
async function async1() {
  console.log("2.5");
  await async2();
  // 下一个事件循环的异步，类似于then后的语句
  console.log("3.5");
}
async function async2() {
  console.log("2.6");
}

requestAnimationFrame(animationFrame);
console.log("1");
setTimeout(() => {
  console.log("4");
}, 0);
Promise.resolve().then(() => {
  console.log("3");
  setTimeout(() => {
    console.log("8");
  });
});
new Promise((res) => {
  console.log("1.5");
  res("");
  console.log("1.6");
});
setTimeout(() => {
  console.log("5");
  Promise.resolve().then(() => {
    console.log("6");
  });
}, 0);
setTimeout(() => {
  console.log("7");
}, 0);
console.log("2");
async1();
