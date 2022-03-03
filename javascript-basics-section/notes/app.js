// 20. HELPER METHODS

// document.write("hello world"); //displays text in the browser window.
// //document.write({ name: "romeo" }); // displays only shows Object object

// /*
// alert("hello world"); //provides a pop-up box in the browser after activating the browser
// alert({ name: "romeo" }); // provides a pop-up box but only shows Object object
// */

// console.log("hello world"); //shows result in the console of the browswer;
// //console.log({ name: "romeo" });

// // 21. STATEMENTS AND COMMENTS

// console.log("This is a statement"); // This is a statement.
// console.log("This is another statement"); // Semicolons are optional but recommended

// console.log("Comments are used to showcase code"); // Use (Ctrl + /) or (Shift+ Alt + A) for block comments

// // 22. VARIABLES IN JAVASCRIPT

// // Variables allow to store, access, modify === value
// let name = "romeo the fifth";
// console.log(name);

// // 23. ASSIGN VARIABLE VALUE LATER

// let address, zip, state;

// address = "1234 Main St.";
// zip = "12345";
// state = "MO";
// name = "fish burrito";

// console.log(address, zip, state); // automatically adds a space
// console.log(address + " " + zip + " " + state);
// console.log(name);

// 24. VARIABLE NAMING RULES

/*
 * can contain digits, letters, underscore, $
 * must start with letter, $, or _
 *
 * no keyword
 *  let for = "incorrect" <-- does not work, uses a keyword (for)
 * cannot start with number --> let 12random123;
 *
 * case sensitive - fullname vs Fullname
 *  let fullname = "random";
 *  let fullName = "random" <--not the same as previous variable
 * camelCase or underscore
 *  let fullName = "random"; <-- this works
 *  let full_name = "random"; <-- this works
 */

// 25. CONST, LET, VAR
/*
 * using var
 * var value = "some value"; <--replaced by let and const in 2015
 * value = "some other value";
 *
 * using let
 * let name = "john"
 * name = "peter";
 *
 * using const (CONST) - can't re-assign AND requires to be initialized
 * const lastName = "jordan";
 * lastName = "incorrect"; <-- cannot reassign
 *
 */

/* 29. QUOTATION MARKS
 *
 * Double or Single Quotation Marks. It doesn't matter.
 * const name = "john\'s course are the best"
 *
 */

/* 30. STRING CONCATENATION
 */

// name = "john";
// const lastName = "shakeandbake";
// let fullName;

// console.log("Hello there your full name is : " + name + lastName);

// const website = "udemy";
// const url = "https://" + website + ".com";
// console.log(url);

/*
31. NUMBERS BASICS
// Numbers are loosely typed in JavaScript, meaning no need to declare a type
*/

/* const number = 34;
let pants = 2.456;
const number2 = 2.456;
const number3 = "2.456";

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div); */

// pants = "are great";
// console.log(number);
// console.log(pants);
// console.log(number2);
// console.log(number3);

/* 32. ADDITIONAL NUMBER OPERATORS */
// let number = 40;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;

// const slices = 10;
// const children = 3;
// const amount = slices % children;

// console.log(number);
// console.log(amount);

/* 35. IMPLICIT TYPE CONVERSIONS */
// const name = "john";
// const lastName = "jordan";
// const fullName = name + " " + lastName;
// console.log(fullName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// let number3 = "10";
// let number4 = "23";
// const result2 = number3 - number4;
// console.log(result2);

// 36. DATE TYPES

// Primitive data types - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value);

//String
// const text = "some text";
// //Number
// const number = 45;
// //Boolean
// let value1 = true;
// let value2 = false;
// //Null
// const value3 = null; //null is null. null is not an object. this is a bug.
// // Undefined
// let value4;

// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof value1, typeof value2);
// console.log(typeof String);
// console.log(typeof value3);
// console.log(typeof value4);

//37. ARRAYS
// Arrays, Function and Objects
// Arrays - [], 0 index based

// const friend1 = "anna";
// const friend2 = "anna";
// const friend3 = "anna";
// const friend4 = "anna";

// const friends = ["romeo", "clayton", "jeremiah"];
// console.log(friends);
// console.log(friends.indexOf("romeo"));

//39. FUNCTIONS- Declare, Invoke

//keyword name parameters
// function hello() {
//   console.log("Hello There Bob");
//   console.log("Hello There John");
//   console.log("Hello There Susy");
// }

// hello();
// hello();
// hello();

//40. FUNCTION parameters and arguments

// function hello(name) {
//   console.log("Hello There " + name);
// }

// // greet bob
// hello("Bob");
// //greet anna
// hello("Anna");
// // greet susy
// hello("Susy");

// 41. FUNCTION RETURN

// all functions by default return "undefined" if there is no
// returned value;

// 42. FUNCTION EXPRESSIONS

// function defintion/declation
// function addValues(num1, num2) {
//   return num1 + num2;
// }

// // function expression // this is an anonymous function
// const add = function adder(num1, num2) {
//   return num1 + num2;
// };

// console.log(add(2, 3));

// 44. OBJECTS

// Objects - key/value pairs methods
// dot notation

// const person = {
//   name: "romeo",
//   lastName: "the coder",
//   age: 40,
//   education: false,
//   married: true,
//   siblings: ["anny", "susan", "peter"],
//   greeting: function () {
//     console.log("hello", this.name);
//   },
// };

// let age = person.age;
// console.log(age == person.age);
// console.log(person.name);
// console.log(person.siblings[0]);
// person.greeting();

//46. CONDITIONAL STATEMENTS

// >, <, >=, <=, ==, ===, !=, !==
// if (2 > 1) {
//   console.log("hello world");
// }
// == checks only value
// === checks value and type

// const num1 = 6;
// const num2 = "6";
// const value = num1 === num2;
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(value);

//49. LOGICAL OPERATORS
// (|| - OR), (&& - AND), !
// const name = "bob";
// const age = 24;

// if (name === "bob" || age === 24) {
//   console.log("hello there user");
// } else {
//   console.log("wrong values");
// }

//50. SWITCH STATEMENTS
// Another way to basically write an if or else

// const dice = 1;

// switch (dice) {
//   case 1:
//     console.log("got it");
//     break;
//   case 2:
//     console.log("nope");
//     break;
//   default:
//     console.log("default case");
// }

//52-54. LOOPS
// while loop, do while loop, for loop
