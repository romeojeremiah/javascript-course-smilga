const product = document.querySelector(".product");
const api = "https://course-api.com/javascript-store-single-product";

function start() {
    product.innerHTML = `<div class="loading"></div>`;
    try {
        fetchProduct();
    } catch (error) {
        product.innerHTML = "There was an error";
    }
}

async function fetchProduct() {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    let url = `${api}?id=${id}`;

    const response = await fetch(url);
    const data = await response.json();
    displayProduct(data);
}

function displayProduct(item) {
    console.log(item);
    const { name: title, price, company, description } = item.fields;

    const { url: img } = item.fields.image[0];
    const { colors } = item.fields;

    const colorList = colors
        .map(
            (color) =>
                `<span class="product-color" style="background:${color}"></span>`
        )
        .join("");

    product.innerHTML = `<div class="product-wrapper">
                <img src="${img}" alt="${title}" class="img" />
                <div class="product-info">
                    <h3>${title}</h3>
                    <h5>${company}</h5>
                    <span>${price / 100}</span>
                    <div class="colors">
                        ${colorList}
                    </div>
                    <p>
                        ${description}
                    </p>
                    <button class="btn">add to cart</button>
                </div>
            </div>`;
}

start();
