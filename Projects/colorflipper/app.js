const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const body = document.querySelector("body");
const colorDesc = document.querySelector(".color");

btn.addEventListener("click", function () {
    //get random number between 0 - 3
    //use the random number to generate a color
    let color = Math.floor(Math.random() * colors.length);
    colorDesc.textContent = colors[color];
    body.style.backgroundColor = colors[color];
});
