//select page body
const body = document.querySelector("body");
//select button
const button = document.querySelector("button");

const input = document.querySelector("input");
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

button.addEventListener("click", function () {
  console.log("you clicked me");
});

button.addEventListener("mousedown", function () {
  console.log("down");
});
button.addEventListener("mouseup", function () {
  console.log("up");
});

button.addEventListener("mouseenter", function () {
  body.classList.add("red");
  console.log("entered");
});

button.addEventListener("mouseleave", function () {
  console.log("left");
  body.classList.remove("red");
});

console.log(input);
input.addEventListener("keydown", function (e) {
  console.clear();
  console.log(input.value);
});

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

//
