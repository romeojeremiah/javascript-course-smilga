// // create calculateTotal function
// function calculateTotal() {}
// // add two parameters subTotal, tax
// function calculateTotal(subTotal, tax) {}
// // return sum of parameters
// function calculateTotal(subTotal, tax) {
//   return subTotal + tax;
// }
// //create 3 vars 'order1', 'order2', 'order3'
// let order1;
// let order2;
// let order3;
// //call calculateResult, pass in some values and assign
// // result to each other
// order1 = calculateTotal(14, 0.9);
// order2 = calculateTotal(5, 0.6);
// order3 = calculateTotal(9, 0.5);
// log all three orders
// console.log("order1:", order1, "order2:", order2, "order3:", order3);
// refactor calculateTotal to function expression
const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};
let order1 = calculateTotal(14, 0.9);

let order2 = calculateTotal(5, 0.6);

let order3 = calculateTotal(9, 0.5);

console.log("order1:", order1, "order2:", order2, "order3:", order3);
