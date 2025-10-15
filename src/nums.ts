function animationFrame() {
  console.log("requestAnimationFrame");
}
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeOut");
}, 0);

async1();

new Promise((res) => {
  console.log("promise1");
  res(1);
}).then(() => {
  console.log("promise2");
});

requestAnimationFrame(animationFrame);

console.log("script end")
