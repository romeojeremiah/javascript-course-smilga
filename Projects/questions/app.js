//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

// // traversing the dom solution
// const questionBtns = document.querySelectorAll(".question-btn");

// console.log(questionBtns);
// questionBtns.forEach(function (question) {
//     question.addEventListener("click", function (e) {
//         const questionParent = e.currentTarget.parentElement.parentElement;
//         questionParent.classList.toggle("show-text");
//     });
// });
