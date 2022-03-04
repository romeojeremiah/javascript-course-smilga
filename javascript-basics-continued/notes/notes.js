// 56. STRINGS
// Javascrip creates a wrapper String Object when strings are created.
// let text = " Peter Jordan";
// let result = text.length;
// console.log(result);
// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(3));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf("a"));
// console.log(text.trim());
// console.log(text.startsWith("eter", 2));
// console.log(text.includes("ter"));
// console.log(text.slice(-1));
// // console.log(typeof text);

// //57. TEMPLATE LITERALS
// // ``
// // Template Literals - ES6+
// // Backtick characters `` - above tab (left from one)
// // Interpolation ${} - insert expression(value)
// const word = "forever";
// console.log(`This is my ${word} home`);

// const name = "john";
// const age = 25;
// const sentence = "Hey it's " + name + " and he is " + age + " years old";
// const value = `Hey it's ${name} and he is ${age} years old`;
// console.log(value);
// console.log(sentence);

//59. ARRAY PROPERTIES AND METHODS

// let names = ["john", "bobo", "barry", "olga", "ben", 2, 4, 7];

// //length
// console.log(names.length);
// console.log(names[4]);
// console.log(names[names.length - 1]);

// //concat
// const lastNames = ["pepper", "onion", "banana"];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// //reverse
// console.log(allNames.reverse());

// //unshift, shift
// allNames.unshift("susy");
// console.log(allNames);

// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// //push, pop
// allNames.push("lastElement");
// console.log(allNames);
// allNames.pop();
// console.log(allNames);

// //splice - THIS MUTATES THE ORIGINAL ARRAY
// const newArray = allNames.splice(1, 3);
// console.log(allNames);
// console.log(newArray);

// 62. REFERENCE VS> VALUE

// Primitive Data Types
// String, Number, Symbol, Boolean, undefined, null

// when assigning primitive data type value to a variable any changes
// are made directly to that value, without affecting original value;

/* when assigning non-primitive data type to a variable is done by referenec
so any changes will affect all the references */
// let person = { name: "bob" };
// let person2 = person;
// person2.name = "susy";

//63. null and undefined

//undefined = 'javascript' sets this value
// let number = 20 + null; // 20 + 0;
// console.log(number);
// let number2 = 20 + undefined; // 20 + 0;
// console.log(number2);

//62. TRUTHY AND FALSY VALUES

// "", '', ``, 0, -0, NaN, false, null, undefined <--These ARE Return False
// Everything else is a truly value;

//65. Ternary Operator
// condition ? (runs if true) " (runs if false)

// const value = 2 > 3 ? console.log(true) : console.log(false);

//66. Global Scope vs. Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accessed anywhere in the program
// Gotchas: name collisions, modify by mistake

//67. Local Scope

// access of variables from within blocks of code

//69. Callback Functions, Higher Order Functions,
// Functions as First Class Objects/Citizens

//Functions are first class objects - stored in a variable (expression),
//passed as an argument to another function, return from the function (closure)

//Higher Order function - accepts another function as an argument
//or returns another function as a result

//Callback Function - passed to another function as an argument and executed
//inside that function.

// const myGreeter = function (timeOfDay) {
//   return `Good ${timeOfDay}`;
// };

// const myName = function (yourName) {
//   return `${yourName}`;
// };

// const fullGreeting = function (greet, name) {
//   return `${greet("Afternoon")}, ${name("Romeo")}`;
// };

// console.log(fullGreeting(myGreeter, myName));

//70. Array Iterators

//forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls Callback function against

//71. FOR EACH
// // each item in an array
// const array = ["a", "b", "c"];

// // array.forEach((element) => console.log(element));

// // array.forEach(function (element) {
// //   console.log(element);
// // });

// function cb(item, index, array) {
//   console.log(item, index, array);
// }

// array.forEach(cb);

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
// ];

// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }

// // people.forEach(showPerson);

// people.forEach(function (element) {
//   console.log(people);
// });

// const array1 = [1, 4, 9, 16];
// const array2 = [];

// array1.forEach(function (item) {
//   array2.push(item * 2);
// });

// console.log({ array2: array2 });
//72. MAP
// does return a new array
// does not change size of original array
// uses values from original array when making new one

// const ages = people.map(function (person) {
//   console.log(person);
//   return person.age + 20;
// });

// const newPeople = people.map(function (person) {
//   return { firstName: person.name.toUpperCase(), oldAge: person.age + 20 };
// });
// console.log(newPeople);

//73. FILTER
// does return a new array
// can manipulate the size of new array
// returns based on condition

// const youngPeople = people.filter(function (person) {
//   return person.age < 29;
// });

// console.log(youngPeople);

//74. FIND

// returns AN object, (A SINGLE INSTANCE), NOT AN ARRAY in this case an object
// returns first match, if no match undefined
// great for getting unique value

// const person = people.find(function (person) {
//   return person.id === 2;
// });

// console.log(person);

//75. REDUCE
// iterates, callback function
// reduces values of array to single value, - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 paramter ('curr') - current iteration/value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
//   { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
//   { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
// ];

// const totalSalary = people.reduce(function (acc, currItem) {
//   console.log(`total ${acc}`);
//   console.log(`currItem ${currItem.salary}`);
//   acc += currItem.salary;
//   return acc;
// }, 0);

// console.log("totalSalary", totalSalary);

//86. MATH OBJECT

// Standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number);
// const result2 = Math.ceil(number);

// console.log(result, result2);

//87. DATE OBJECT

const date = new Date("1/12/15");
console.log(date);

//
