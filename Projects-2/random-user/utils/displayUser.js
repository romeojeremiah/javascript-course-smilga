import { getElement } from "./getElement.js";

export const displayUser = function (user) {
    const title = getElement(".user-title");
    const value = getElement(".user-value");
    const img = getElement(".user-img");
    const btns = [...document.querySelectorAll(".icon")];

    img.src = user.img;
    title.textContent = `My name is`;
    value.textContent = `${user.name}`;

    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const label = btn.dataset.label;
            img.src = user.img;
            title.textContent = `My ${label} is`;
            value.textContent = `${user[label]}`;
            btns.forEach((btn) => {
                btn.classList.remove("active");
            });
            btn.classList.add("active");
        });
    });
};
