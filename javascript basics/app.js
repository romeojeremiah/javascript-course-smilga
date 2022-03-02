// 20. HELPER METHODS

document.write("hello world"); //displays text in the browser window.
//document.write({ name: "romeo" }); // displays only shows Object object

/*
alert("hello world"); //provides a pop-up box in the browser after activating the browser
alert({ name: "romeo" }); // provides a pop-up box but only shows Object object
*/

console.log("hello world"); //shows result in the console of the browswer;
//console.log({ name: "romeo" });

// 21. STATEMENTS AND COMMENTS

console.log("This is a statement"); // This is a statement.
console.log("This is another statement"); // Semicolons are optional but recommended

console.log("Comments are used to showcase code"); // Use (Ctrl + /) or (Shift+ Alt + A) for block comments

// 22. VARIABLES IN JAVASCRIPT

// Variables allow to store, access, modify === value
let name = "romeo the fifth";
console.log(name);

// 23. ASSIGN VARIABLE VALUE LATER

let address, zip, state;

address = "1234 Main St.";
zip = "12345";
state = "MO";
name = "fish burrito";

console.log(address, zip, state); // automatically adds a space
console.log(address + " " + zip + " " + state);
console.log(name);

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
