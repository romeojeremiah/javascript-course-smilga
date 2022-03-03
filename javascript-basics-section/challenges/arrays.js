const fruits = ["apple", "oranges", "bananas", 4];
console.log(fruits);
//assign first fruit to a variable
const first = fruits[0];
//re-assign last array item to actual fruit
fruits[fruits.length - 1] = "blueberries";
console.log(fruits);
// log both first fruit and entire fruits array
console.log(first);
