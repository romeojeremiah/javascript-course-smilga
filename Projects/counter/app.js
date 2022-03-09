// const decreaseBtn = document.querySelector(".decrease");
// const increaseBtn = document.querySelector(".increase");
// const resetBtn = document.querySelector(".reset");
// const value = document.querySelector("#value");

// decreaseBtn.addEventListener("click", function () {
//     let counter = parseInt(value.textContent);
//     counter -= 1;
//     if (counter === 0) {
//         value.style.color = "black";
//     } else if (counter < 0) {
//         value.style.color = "red";
//     }
//     value.textContent = counter;
// });

// increaseBtn.addEventListener("click", function () {
//     let counter = parseInt(value.textContent);
//     counter += 1;
//     if (counter === 0) {
//         value.style.color = "black";
//     } else if (counter > 0) {
//         value.style.color = "green";
//     }
//     value.textContent = counter;
// });

// resetBtn.addEventListener("click", function () {
//     let counter = parseInt(value.textContent);
//     counter = 0;
//     value.style.color = "black";
//     value.textContent = counter;
// });

// CODE REFACTOR USING FOR EACH

//select div with value
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let count = 0;

//set up event listener on all buttons

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if (e.target.classList.contains("reset")) {
            count = 0;
        } else if (e.target.classList.contains("decrease")) {
            count--;
        } else if (e.target.classList.contains("increase")) {
            count++;
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    });
});
