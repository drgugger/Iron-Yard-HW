// Get the sum of two numbers
function sum (x, y) {
  return x + y;
}
console.log(sum(8,10));


// Find the largest of two numbers
function max(a, b){
  var largest;
  if (a > b) {
    largest = a;
  } else {
    largest = b;
  }
  return largest;
}
console.log(max(30,80));
// //
// // // Copy the following block of code to your main.js file and write 2 statements for each function and log the results.

// function addNumbers(numberA, numberB) {
//   return (numberA + numberB)
// }
//
// var twoPlusTwo = addNumbers(2, 2);
//
// console.log(twoPlusTwo); // 4



function yell (x,y) {
console.log(x.toUpperCase());
console.log(y.repeat(3));
}
yell ("Hello", "man")
