import get from "./getElement.js";
import { toggleLoading } from "./toggleLoading.js";

const container = get(".single-drink");

const displaySingleDrink = (drink) => {
    toggleLoading("hide-loading");
    const {
        strDrinkThumb: image,
        strDrink: name,
        strInstructions: desc,
    } = drink;

    const allIngredients = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];
    const ingredients = allIngredients
        .map((ingredient) => {
            if (!ingredient) return;
            return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
        })
        .join("");

    document.title = name;

    container.innerHTML = `<img src="${image}" class="drink-img" alt="" />
            <article class="drink-info">
                <h2 class="drink-name">${name}</h2>
                <p class="drink-desc">${desc}</p>
                <ul class="drink-ingredients">${ingredients}</ul>
                <a href="index.html" class="btn">all cocktails</a>
            </article>`;
};

export default displaySingleDrink;
