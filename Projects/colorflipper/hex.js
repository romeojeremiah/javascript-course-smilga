const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const span = document.querySelector("span");

//create click event to generate a random background color
btn.addEventListener("click", function () {
    //change the color description
    hexColor = generateColor();
    span.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function generateColor() {
    let color = "#"; // declare a color variable to hold a hex color

    //Grab a random letter or number from hex array 6 times
    for (let i = 0; i <= 5; i++) {
        let arrayIndex = Math.floor(Math.random() * hex.length);
        //add element at index to the color variable
        color += hex[arrayIndex];
    }
    return color;
}
