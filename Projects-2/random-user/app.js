// getElement helper function
import { getElement } from "./utils/getElement.js";
import { getUserData } from "./utils/getUserData.js";
import { displayUser } from "./utils/displayUser.js";

const btn = getElement(".btn");

const fetchUser = async () => {
    const URL = "https://randomuser.me/api/";

    const response = await fetch(URL);
    const data = await response.json();
    const user = getUserData(data.results[0]);
    displayUser(user);
};

window.addEventListener("DOMContentLoaded", fetchUser);

btn.addEventListener("click", fetchUser);
