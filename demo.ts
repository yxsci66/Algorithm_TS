const a = new Promise((_, reject) => {
  reject("1");
});
a.catch((e) => {
  console.log(`${e} catch`);
  return e;
}).then((e) => {
  console.log(`${e} then`);
});
