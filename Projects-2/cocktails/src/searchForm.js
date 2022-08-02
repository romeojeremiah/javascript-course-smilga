import { displayDrinks } from "./displayDrinks.js";
import { fetchDrinks } from "./fetchDrinks.js";
import get from "./getElement.js";

// *** searchForm.js ***
const input = get("input[name=drink]");

input.addEventListener("keyup", async (e) => {
    const value = e.target.value;

    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    const data = await fetchDrinks(url);
    displayDrinks(data);
});
