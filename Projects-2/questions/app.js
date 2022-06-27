const btns = document.querySelectorAll(".btn-question");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const currentEl = e.currentTarget;
        const btnMinus = currentEl.querySelector(".btn-minus");
        const btnPlus = btn.parentElement.querySelector(".btn-plus");
        const answerEl = currentEl.parentElement.nextElementSibling;
        answerEl.classList.toggle("show-answer");

        if (answerEl.classList.contains("show-answer")) {
            btnMinus.style.display = "inline";
            btnPlus.style.display = "none";
        } else {
            btnMinus.style.display = "none";
            btnPlus.style.display = "inline";
        }
    });
});
