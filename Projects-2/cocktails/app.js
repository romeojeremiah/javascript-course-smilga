import get from "./src/getElement.js";
import { fetchDrinks } from "./src/fetchDrinks.js";
import { displayDrinks } from "./src/displayDrinks.js";
import "./src/searchForm.js";

let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

const drinks = await fetchDrinks(url);

displayDrinks(drinks);
