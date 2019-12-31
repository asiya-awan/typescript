//function and default parameters
const countDown = (start: number = 10, end: number = 5): void => {
  console.log(`start: ${start}, end: ${end}`);
  while (start > end) {
    start--;
  }
  console.log(`Done! start: ${start}, end: ${end}`);
};

console.log("----- CountDown(2, def: 5)-------");
countDown(2);
console.log("----- CountDown(undefined, 15)-------");
countDown(undefined, 15);
console.log("----- CountDown(13,8)-------");
countDown(13, 8);
console.log("-----Default CountDown(10,5)-------");
countDown();

//order does matter in default parameters
