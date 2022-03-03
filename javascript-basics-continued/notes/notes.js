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

let names = ["john", "bobo", "barry", "olga", "ben", 2, 4, 7];

//length
console.log(names.length);
console.log(names[4]);
console.log(names[names.length - 1]);

//concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift, shift
allNames.unshift("susy");
console.log(allNames);

allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

//push, pop
allNames.push("lastElement");
console.log(allNames);
allNames.pop();
console.log(allNames);

//splice - THIS MUTATES THE ORIGINAL ARRAY
const newArray = allNames.splice(1, 3);
console.log(allNames);
console.log(newArray);
