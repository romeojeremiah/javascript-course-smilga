// //91. getElementById('element');
// const h1 = document.getElementById("title");
// h1.style.color = "red";
// document.getElementById("btn").style.color = "red";
// document.getElementById("btn").style.backgroundColor = "white";

// // Select the element
// //92. Get Elements By Tag Name

// // getElementsByTagName('tagname');
// const h2headings = document.getElementsByTagName("h2");
// console.log(h2headings.length);
// h2headings[0].style.color = "red";

// // can not use array methods on HTMLCollections
// const items = document.getElementsByTagName("li");
// console.log(items);

// //querySelectorAll() in most cases is better
// //NodeList - objects are collections of nodes
// // can run forEach
// // turn them into array via the spread operator [...]
// // after that can use any array properties and methods
// const betterItems = [...items];
// console.log(betterItems);
// betterItems.forEach(function (item) {
//   console.log(item);
// });
// 93. GET ELEMENTS BY CLASS NAME
// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection
// getElementsByClassName('className');
// HTML Collection
// const elements = document.getElementsByClassName("btn");
// console.log(elements);
// 94. QUERY SELECTOR AND QUERY SELECTOR ALL
// Select the element or group of elements that we want
// const list = document.querySelectorAll(".special");
// console.log(list);
// list.forEach(function (item) {
//   console.log(item);
//   item.style.color = "red";
// });
//95. NAVIGATE THE DOM - CHILDREN

//childNodes - returns all childNodes including whitespace which is treated
// as a text node

// const result = document.querySelector("#result");
// const allChildren = result.childNodes; //results elements AND text
// console.log(allChildren);

// const children = result.children;
// console.log(children);

// console.log(result.firstChild);
// console.log(result.lastChild);
// 96. NAVIGATE THE DOM - parentElement
// grab the parent of the element/node
// const heading2 = document.querySelector("h2"); //select just the h2
// const bodyParent = heading2.parentElement.parentElement.parentElement;
// console.log(bodyParent);
// bodyParent.style.backgroundColor = "white";
// 97. NAVIGATE THE DOM - nextSibling, previousSibling
// 99. textContent
// 100. GETATTRIBUTE SETATTRIBUTE
// const first = document.querySelector(".first");
// const classValue = first.getAttribute("class");
// const idValue = first.getAttribute("id");
// console.log(classValue);
// console.log(idValue);

// const link = document.getElementById("link");
// console.log(link);
// link.setAttribute("href", "https://www.google.com");

// const links = document.querySelectorAll(".first");
// console.log(links);

// const last = link.nextElementSibling;
// last.setAttribute("class", "first");
// last.textContent = "I now have attributes";

// 101. CLASSLIST AND CLASSNAME
const third = d;
