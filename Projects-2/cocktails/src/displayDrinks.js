import { toggleLoading } from "./toggleLoading.js";
import get from "./getElement.js";

// *** displayDrinks ***

const title = get(".title");
const section = get(".section-center");

export const displayDrinks = (drinks) => {
    toggleLoading("hide-loading");
    if (!drinks) {
        toggleLoading("hide-loading");
        title.innerHTML = `<h2>No cocktails found</h2>`;
        section.innerHTML = "";
        return;
    }
    const newDrinks = drinks
        .map((drink) => {
            const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;

            return `<a href="./drink.html">
   <article class="cocktail" data-id="${id}">
   <img src="${img}" alt="${name}">
   <h3>${name}</h3>
   </article>
   </a>`;
        })
        .join("");

    section.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.parentElement.classList.contains("cocktail")) {
            const id = e.target.parentElement.dataset.id;
            window.location.assign(`./drink.html?i=${id}`);
        }
    });

    title.innerHTML = ``;
    section.innerHTML = newDrinks;
};
