// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
//clear items
clearBtn.addEventListener("click", clearItems);
//load items
window.addEventListener("DOMContentLoaded", setupItems);
// ****** FUNCTIONS **********

function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}
function addItem(e) {
    e.preventDefault();
    let value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        createListItem(id, value);
        container.classList.add("show-container");
        displayAlert("item added", "success");

        //add to local storage
        addToLocalStorage(id, value);
        setBackToDefault();
        //reset to default
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        //edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert("empty value", "danger");
    }
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 2000);
}

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

function editItem(e) {
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = e.currentTarget.parentElement.parentElement.dataset.id;
    submitBtn.textContent = "edit";
}

function deleteItem(e) {
    //remove element from grocery list container
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);
    displayAlert("deleting item", "danger");

    //remove from local storage using id
    const id = element.dataset.id;
    removeFromLocalStorage(id);

    //remove 'clear items' button if no more grocery items exist
    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }

    //set form default values back
    setBackToDefault();
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    console.log(items);
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
}
// ****** SETUP ITEMS **********
function setupItems() {
    let items = getLocalStorage();
    console.log(items);
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
    }
    container.classList.add("show-container");
}

function createListItem(id, value) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>`;
    const editBtn = element.querySelector(".edit-btn");
    const deleteBtn = element.querySelector(".delete-btn");
    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem);
    list.appendChild(element);
}
