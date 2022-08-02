import { fetchDrinks } from "./src/fetchDrinks.js";
import get from "./src/getElement.js";
import displaySingleDrink from "./src/displaySingleDrink.js";

const container = get(".single-drink");

const params = new URLSearchParams(window.location.search);
const drinkID = params.get("i");

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;

const singleDrink = await fetchDrinks(url);

displaySingleDrink(singleDrink[0]);
