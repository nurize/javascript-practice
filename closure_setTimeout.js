// Closures & setTimeout
// Consider this code:
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
// a) What does this code actually output and why?
// 4
// 4
// 4
// Because the for loop is sychronous code while the body of the loop is asynchrohnous code. Hence, the loop moves on to increment the iterator variable each time till it reaches the maximum value since each iteration results in a delay,causing the outputs to be the final value of the iterator variable.
// b) Fix it using a closure.
// c) Fix it alternatively using let instead of var and explain why that works

// function createCounter() {
//   let count = 1;

//   function displayCount() {
//     const currentCount = count;
//     setTimeout(function () {
//       console.log(currentCount);
//     }, currentCount * 1000);
//     count++;
//   }

//   return { displayCount };
// }

// const counter = createCounter();

// counter.displayCount();
// counter.displayCount();
// counter.displayCount();

for (let i = 1; i <= 3; i++) {
  (function (j){
    setTimeout(function () {
      console.log(j);
    }, j * 1000)
  })(i);
}