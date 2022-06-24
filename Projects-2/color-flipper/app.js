//set colors array

const colorsArr = ["red", "green", "rgba(133,122,200)", "#f15025"];

const btn = window.document.querySelector(".btn-color");

const color = window.document.querySelector(".color");
const background = window.document.querySelector(".main");

const choiceBasic = function () {
    let choice = Math.floor(Math.random() * colorsArr.length);

    //return a random color non-hex page
    return colorsArr[choice];
};

const getRandomColor = function () {
    let hexString = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];

    let color = "";
    for (let i = 0; i < 2; i++) {
        color += hexString[Math.floor(Math.random() * hexString.length)];
    }

    return color;
};

const choiceHex = function () {
    let red = getRandomColor();
    let green = getRandomColor();
    let blue = getRandomColor();

    //return a hex color
    return `#${red}${green}${blue}`;
};

btn.addEventListener("click", function () {
    let choice;
    if (window.location.pathname.includes("hex")) {
        choice = choiceHex();
    } else {
        choice = choiceBasic();
    }
    //choice a random color

    let randomColor = choice;
    background.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});
