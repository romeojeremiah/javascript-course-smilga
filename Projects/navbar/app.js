// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// toggle.addEventListener("click", function () {
//     if (links.classList.contains("show-links")) {
//         links.classList.remove("show-links");
//     } else {
//         links.classList.add("show-links");
//     }
// });

//refactor above eventListener

toggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
