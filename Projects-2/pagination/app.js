import { displayUsers } from "./modules/displayUsers.js";
import { fetchUsers } from "./modules/fetchUsers.js";
import { paginate } from "./modules/paginate.js";
import { displayBtns } from "./modules/displayBtns.js";

const btnContainer = document.querySelector(".btn-container");
let pageIndex = 0;

window.addEventListener("DOMContentLoaded", async () => {
    const users = await fetchUsers();
    const paginated = paginate(users);
    displayBtns(btnContainer, paginated, pageIndex);
    addBtnListeners(paginated);
    displayUsers(paginated[pageIndex]);
});

function addBtnListeners(paginated) {
    btnContainer.addEventListener("click", (e) => {
        const list = Array.from(e.target.classList);

        if (list.includes("btn-prev")) {
            pageIndex === 0 ? (pageIndex = paginated.length - 1) : pageIndex--;
        }
        if (list.includes("btn-next")) {
            pageIndex === paginated.length - 1 ? (pageIndex = 0) : pageIndex++;
        }
        if (list.includes("btn-number")) {
            pageIndex = Number.parseInt(e.target.dataset.id);
        }

        console.log(pageIndex);
        displayBtns(btnContainer, paginated, pageIndex);

        displayUsers(paginated[pageIndex]);
    });
}
