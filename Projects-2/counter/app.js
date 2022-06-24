const counter = document.querySelector(".number");
const btnDecrease = document.querySelector(".btn-decrease");
const btnReset = document.querySelector(".btn-reset");
const btnIncrease = document.querySelector(".btn-increase");

let numberCounter = 0;

function changeCounter(number) {
    if (number < 0) {
        counter.style.color = "red";
    }
    if (number > 0) {
        counter.style.color = "green";
    }
    if (number === 0) {
        counter.style.color = "#102a42";
    }
    counter.textContent = number;
}

function decrease() {
    numberCounter = numberCounter - 1;
    changeCounter(numberCounter);
}

function increase() {
    numberCounter = numberCounter + 1;
    changeCounter(numberCounter);
}
function reset() {
    numberCounter = 0;
    changeCounter(numberCounter);
}

btnDecrease.addEventListener("click", decrease);
btnIncrease.addEventListener("click", increase);
btnReset.addEventListener("click", reset);
