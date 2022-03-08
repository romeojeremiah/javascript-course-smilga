//select page body
// const body = document.querySelector("body");
// //select button
// const button = document.querySelector("button");

// const input = document.querySelector("input");
//apply event listener to button
//button.addEventListener("click", changeBGColor);
// create changeBGColor function

// function changeBGColor() {
//   let list = ["red", "blue"];
//   let random = Math.floor(Math.random() * list.length);
//   body.classList.toggle(list[random]);
// }

// button.addEventListener("click", changeColors);
// function changeColors() {
//   let hasClass = body.classList.contains("red");

//   if (hasClass) {
//     body.classList.remove("red");
//     body.classList.add("blue");
//   } else {
//     body.classList.remove("blue");
//     body.classList.add("red");
//   }
// }
//112. MOUSE EVENTS

//click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

// button.addEventListener("click", function () {
//   console.log("you clicked me");
// });

// button.addEventListener("mousedown", function () {
//   console.log("down");
// });
// button.addEventListener("mouseup", function () {
//   console.log("up");
// });

// button.addEventListener("mouseenter", function () {
//   body.classList.add("red");
//   console.log("entered");
// });

// button.addEventListener("mouseleave", function () {
//   console.log("left");
//   body.classList.remove("red");
// });

// console.log(input);
// input.addEventListener("keydown", function (e) {
//   console.clear();
//   console.log(input.value);
// });

// 113. KEY EVENTS

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

// EVENT OBJECT

// event object argument e, evt
// info about trigger event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behavior

//115. TARGET VS> CURRENT TARGET

//event.currentTarget - always refers to the element to which the event
//handling has been attached

//event.target - identifies the element on which the event occured

//116 EVENT PROPAGATION - BUBBLING CAPTURING

// allows select dynamic elements

//118. FORMS

// submit event listeners
// prevent default
// how to get a value
// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const password = document.getElementById("password");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("form submitted");
//   console.log(name.value);
//   console.log(password.value);
// });

//119. LOCAL STORAGE

// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');
// const key = "key";
// const value = "value";
// localStorage.setItem("storage", `{ ${key}, ${value} }`);
// const storage = localStorage.getItem("storage");
// console.log(storage);
// localStorage.removeItem("storage");

//120. LOCAL STORAGE WITH MULTIPLE VALUES

// JSON.stringify(), JSON.parse();

// const friends = ["john", "peter", "bobby"];

// localStorage.setItem("friends", JSON.stringify(friends));

// const values = JSON.parse(localStorage.getItem("friends"));
// console.log(values[2]);

// const newValues = ["one", "two", "three"];

// let fruits;

// //check if value is is local storage
// if (localStorage.getItem("fruits")) {
//   fruits = JSON.parse(localStorage.getItem("fruits"));
// } else {
//   fruits = [];
// }

// fruits.push("orange");
// localStorage.setItem("fruits", JSON.stringify(fruits));

//121. setTimeout

/*
    setTimeout- runs function once after specifc time

    -pass function reference
    -duration in ms (1000ms = 1 second)
    -default 1, will cover more extensively in async/await section
    -returns unique identifyier
    -clearTimeout to cancel
    -on window objec

*/

// function sayHello() {
//   console.log("hello john");
// }

// // setTimeout(sayHello, 1000);

// const firstId = setTimeout(sayHello, 1000);

// const secondId = setTimeout(sayHello, 1000);
// console.log(firstId);
// console.log(secondId);
// clearTimeout(firstId);
// clearTimeout(secondId);

// 122. setInterval

// runs function repeatedly, at specific intervals

/*


*/

// function showDate() {
//   const date = new Date();
//   const heading = document.getElementById("heading");
//   heading.innerText = date;
// }

// setInterval(showDate, 1000);

// clearInterval(showDate);

// 123. JS GLOBAL EVENTS

/* 
    The DOMContentLoaded event fires when the initial HTML document
    has been completely loaded and parsed, without waiting for 
    stylesheets, images, and subframes to finish loading.

    window.addEventListener('DOMContentLoaded', function(){
        //your code goes here
    })
*/

// window.addEventListener("DOMContentLoaded", function () {
//   console.log("hello");
// });

// Events - load

/*
    The load event is fired when the whole page has loaded, including
    all dependent resources such as stylesheets and images. This is in 
    constrast to DOMContentLoaded, which is fired as soon as the page DOM
    has been loaded, without waiting for resources to finish loading.

*/

// window.addEventListener("load", function () {
//   console.log("hello");
// });
